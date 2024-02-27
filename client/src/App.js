import {Route, Switch, Routes, Router} from 'react-router';
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
  //Check If User is Logged In
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);
  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);
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
