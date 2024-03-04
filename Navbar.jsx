import React from 'react';
import { NavLink, useNavigate, Navigate, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaSignInAlt, FaUserCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
//import polylogo from '//Images/polylogo.png';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1sFRk1Lo2Cj7pEuNlwRpbYd3s8WLa+7VgweVC5I4B+DeOgbe4fPeCxu4NvABKg+qNNQbBRcmcbatZx8efWY9LQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

const MyNavbar = ({}) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log("Navbar.js",isLoggedIn);
    let Navigate = useNavigate();
    return <>
    <section id='Navbar'>
        <Navbar id='Navbar' bg="primary" data-bs-theme="dark">
        <Container>
            <Navbar.Brand as={NavLink} to="/">
                <img 
                    alt=''
                    src='https://junior-pps.fr/images/index-removebg-preview-transformed.svg'
                    // src='./Images/polylogo.jpg'
                    width='160'
                    height='40'
                    />{' '}
                Poly-Assistant
            </Navbar.Brand>
                <Nav className="me-auto">
                    {/* <Nav.Link as={NavLink} to="/Home">Home</Nav.Link> */}
                    <Nav.Link as={NavLink} to="/About">À propos de nous</Nav.Link>
                    <Nav.Link as={NavLink} to="/Contact">Contact</Nav.Link>
                </Nav>
    {isLoggedIn!='true'? <Nav>
                    <Link to="/Login" > 
                    <Button variant="outline-light" className="me-2" >
                        <FaUserCircle /> Login 
                        {/* <Navigate to="/Login"/> */}
                    </Button>
                    </Link>
                    <Link to="./Signup" > 
                    <Button as={NavLink} to="/Signup" variant="outline-light" >
                        <FaSignInAlt /> SignUp
                    </Button>
                    </Link> 
                </Nav> 
    : null}
    {isLoggedIn=='true'? <Nav>
                    <Link to="Dashboard" > 
                    <Button variant="outline-light" className="me-2" >
                        <FaUserCircle /> Dashboard 
                        {/* <Navigate to="/Login"/> */}
                    </Button>
                    </Link>
                    <Link to="./Logout" > 
                    <Button as={NavLink} to="/Logout" variant="outline-light" >
                        <FaSignInAlt /> Logout
                    </Button>
                    </Link> 
                </Nav> 
    : null}
            </Container>
        </Navbar>
    </section>
    </>;
}

          
export default MyNavbar;
          






// <div>
//     <nav className="navbar navbar-expand-lg navbar-light shadow">
//         <div className="container">
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button
            
            // <div className="collapse navbar-collapse" id="navbarSupportedContent">
            //     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            //         <li className="nav-item">
            //         <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            //         </li>
            //         {/* <li className="nav-item">
            //         <NavLink className="nav-link" to="/about">About</NavLink>
            //         </li>
            //         <li className="nav-item">
            //         <NavLink className="nav-link" to="/service">Services</NavLink>
            //         </li>
            //         <li className="nav-item">
            //         <NavLink className="nav-link" to="/contact">Contact</NavLink>
            //         </li> 

//                 </ul>
//                 <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">Poly-aide</NavLink>
//                     {props.auth ?
//                     <>
//                     <NavLink to="/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill">
//                         <i className="fa fa-sign-in me-2"></i>Login</NavLink>
//                     <NavLink to="/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
//                     <i className="fa fa-user-plus me-2"></i>Register</NavLink>
//                         </>
//                         :
//                         <>
//                     <NavLink to="/dashboard" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                        
//                     <i className="fa fa-user-plus me-2"></i>Dashboard</NavLink>
//                     <NavLink to="/logout" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
//                     <i className="fa fa-sign-out me-2"></i>Logout</NavLink>
//                     </>
//                 }
//                 </div>

//             </div>
//     </nav>
// </div>     */}
