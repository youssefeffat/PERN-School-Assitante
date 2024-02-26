import {Route, Switch, Routes, Router} from 'react-router';
import ProtectedRoute from './ProtectedRoute';
import { useEffect, useState } from 'react';

//import logo from './logo.svg';
import './App.css';
//import Navbar from './Components/Navbar';
import Home from './Components/Home';
// import About from './Components/About';
// import Services from './Components/Services';
// import Contact from './Components/Contact';
import Footer from './Components/Footer';

import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Logout from './Components/Logout';
import MyNavbar from './Components/Navbar';
import About from './Components/About';
import Signup from './Components/Signup';
import Contact from './Components/Contact';


function App() {

  //Check If User is Logged In
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);
  return (
    <>
    <MyNavbar/>
  
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Contact" element={<Contact/>} />
        <Route exact path="/Login" element={<Login/>} auth={auth1}/>
        <Route exact path="/Signup" element={<Signup/>} auth={auth1}/>
        <Route  path="/Dashboard" element={<Dashboard/>} />

      {/*    <ProtectedRoute exact path="/dashboard" component={Dashboard} auth={auth}/>
        <ProtectedRoute exact path="/logout" component={Logout} auth={auth}/>
    */} 
      </Routes>
    <div id='FooterInApp'>
      <Footer/>
    </div>        
    
    </>
  );

}

export default App;
