import {Route, Switch, Routes, Router} from 'react-router';
import {Navigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import MyNavbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Logout from './Components/Logout';
import ProtectedRoute from './ProtectedRoute';

function App() {
  
  // const checkAuthenticated = async () => {
  //   try {
  //     const res = await fetch("http://localhost:3001/Authentification/verify", {
  //       method: "POST",
  //       headers: { jwt_token: localStorage.token }
  //     });

  //     const parseRes = await res.json();

  //     parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // useEffect(() => {
  //   checkAuthenticated();
  // }, []); 

  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const setAuth = boolean => {
  //   setIsAuthenticated(boolean);
  // };

  const [isLoggedIn, setLoggedIn] = useState(false);
  const updateLoggedIn = () => {
    setLoggedIn(!isLoggedIn);
  };
 
 // console.log("App.js",isLoggedIn);    no prb here

  return (
    <>
    <MyNavbar/>
  
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Contact" element={<Contact/>}/>
        <Route exact path="/Login" element={<Login isLoggedIn={true} />}/>
        <Route exact path="/Signup" element={<Signup/>}/>
        <Route exact path="/Logout" element={<Logout/>}/>
        <Route  path="/Dashboard" element={<Dashboard/>} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    
    {/* <ProtectedRoute exact path="/login" component={Login} auth={auth1}/>
    <ProtectedRoute exact path="/Signup" component={Signup} auth={auth1}/>
    <ProtectedRoute exact path="/Dashboard" component={Dashboard} auth={auth}/>
    <ProtectedRoute exact path="/logout" component={Logout} auth={auth}/>
     */}
    
      <Footer/>
           
    
    </>
  );

}

export default App;
