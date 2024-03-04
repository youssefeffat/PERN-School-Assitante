import React, { useEffect } from 'react';
import { useHistory, useNavigate } from 'react-router';

const Logout = () => {

    const Navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    const logout = async () => {
        try {
            const res = await fetch('http://localhost:3001/Logout', {
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            });

            if(res.status === 401 || !res ){
                window.alert("Please Logout Later");
            }else{
                localStorage.setItem("isLoggedIn","false")
                Navigate('/');
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Handle redirect if already logged iout
    useEffect(() => {
        console.log(isLoggedIn);
        if (isLoggedIn != "true"){
          Navigate('/');
          window.location.reload()
        }
        logout();
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default Logout;