// Import All Dependencies
const dotenv = require('dotenv');
const express = require('express');
const {Pool}  = require('pg')
const bodyParser = require('body-parser');
const cors = require('cors');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const pool = require('./Database');

// Create Server
const app = express();

// Configure ENV File & Require Connection File
dotenv.config();
const port = process.env.PORT || 3001;

// These Method is Used to Get Data and Cookies from FrontEnd
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
var corsOptions = {origin: "http://localhost:3001"};

  
{/*------------------------------------------APIs------------------------------------------------------------ */}

app.get('/', (req, res) => {
    res.send("Hello World");
    res.json({ message: "Welcome to bezkoder application." });
    res.status(200).send("Welcome to bezkoder application.");
})

// Registration
app.post('/Signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // Hash the password before saving to the database
        const hashedPassword = await bcryptjs.hash(password, 10);
        // Insert user data into the database
        const createUserQuery = `
            INSERT INTO Users (User_name, Mail, Password)
            VALUES ($1, $2, $3)
            RETURNING *
        `;
        const newUser = await pool.query(createUserQuery, [username, email, hashedPassword]);
        res.status(200).send("Registered");

    } catch (error) {
        console.error("Error during registration:", error.message);
        res.status(400).send(error.message);
    }
})

// Login User
app.post('/Login', async (req, res) => {
    
    const { email, password } = req.body;
    try {
        const { email, password } = req.body;
        // Find User 
        const userQuery = `SELECT * FROM Users WHERE Mail = $1`;
        const userData = await pool.query(userQuery, [email]);
        const user = userData.rows[0];
        if (user) {
            //Verify Password
            const isMatch = await bcryptjs.compare(password, user.password);
            if (isMatch) {
                // // Generate Token
                // const token = jwt.sign({ userId: user.user_id }, process.env.JWT_SECRET, {
                //     expiresIn: '24h'
                // });

                // res.cookie("jwt", token, {
                //     expires: new Date(Date.now() + 86400000),
                //     httpOnly: true
                // })
                res.status(200).send("LoggedIn");
            } else {
                res.status(400).send("Invalid Credentials");
            }

        } else {
            res.status(404).send("User not found");
        }

    } catch (error) {
        console.error("Error during login:", error.message);
        res.status(400).send(error.message);
    }
})



// Logout Page
app.get('/logout', (req, res) => {
    res.clearCookie("jwt", { path: '/' })
    res.status(200).send("User Logged Out")
})


// Run Server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})







