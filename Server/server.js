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

// Middleware
const authenticate = require('./Middleware/authenticate')

// These Method is Used to Get Data and Cookies from FrontEnd
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));


  
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
        // Check if the email already exists in the database
        const existingUser = await pool.query('SELECT * FROM Users WHERE Mail = $1', [email]);
        if (existingUser.rows.length > 0) {
            // If the email already exists, return an error response
            return res.status(401).send("Email address already exists");
        }
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

    console.log(req.body.password);
    console.log(req.body.username);
    console.log(req.body.email);
    console.log("Api got to the backend");
    
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
                // const token = jwt.sign(
                //     { userId: user.user_id },
                //     process.env.JWT_SECRET, 
                //     {expiresIn: '24h'} 
                // );

                // res.cookie("jwt", token, {
                //     expires: new Date(Date.now() + 86400000),
                //     httpOnly: true
                // })
                res.status(200).send("LoggedIn");
            } else {
                res.status(410).send("Invalid Credentials");
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
app.get('/Logout', (req, res) => {
    res.clearCookie("jwt", { path: '/' })
    res.status(200).send("User Logged Out")
})

// Authentication
app.get('/auth', authenticate, (req, res)=>{

})


// Contact
app.post('/Contact/message', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const createMessageQuery = `
            INSERT INTO Message (UserName, Mail, Message)
            VALUES ($1, $2, $3)
            RETURNING *
        `;
        const newMessage = await pool.query(createMessageQuery, [name, email, message]);
        res.status(200).send("Message Sent");

    } catch (error) {
        console.error("Error during message:", error.message);
        res.status(400).send(error.message);
    }
})

//Subscription
app.post('/Subscription', async (req, res) => {   
    try {
        const {email} = req.body;
        const createMessageQuery = `
            INSERT INTO Subscription (Mail)
            VALUES ($1)
            RETURNING *
        `;
        const newMessage = await pool.query(createMessageQuery, [email]);
        res.status(200).send("Message Sent");

    } catch (error) {
        console.error("Error during message:", error.message);
        res.status(400).send(error.message);
    }
    })


// Dashboard
app.post('/getTDs', async (req, res) => {
    const { firstChoice, secondChoice } = req.body;
    console.log(firstChoice, secondChoice);

    try {
      // Construct and execute SQL query
      const query = `
        SELECT User_name, Surname, Mail 
        FROM Users 
        WHERE User_name = $1 AND Surname = $2;
      `;
      const { rows } = await pool.query(query, [firstChoice, secondChoice ]);
        console.log(rows);
      // Send query results to frontend
      res.json(rows);
    } catch (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Run Server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})







