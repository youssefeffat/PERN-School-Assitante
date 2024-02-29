import React, { useEffect } from 'react';
import { useHistory, useNavigate } from 'react-router';

const Logout = () => {

    const Navigate = useNavigate();

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
                Navigate('/');
                localStorage.setItem("isLoggedIn",false)
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        logout();
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default Logout;