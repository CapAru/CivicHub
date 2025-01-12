import React from 'react';
import { useState } from 'react'
import { IoIosLogOut } from "react-icons/io";

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(true)
    function login(){
        setLoggedIn(true)
    }
    const LogoutButton = (
        <div className="logout" o style={{ cursor: 'pointer' }}>
            <IoIosLogOut className='text-2xl mr-4 text-center'/>
        </div>
    )
    return (
        <header style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '10px', 
            position: 'sticky',
            top: 0, 
            left: 0, 
            width: '100%', 
            backgroundColor: 'white', 
            zIndex: 1000,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            height: '60px', /* Fixed height for the header */
        }}>
            <div className='mx-6 text-2xl mr-2 font-bold'>
                <a href="/" style={{ textDecoration: 'none', color: '#0068ff' }}>
                    <h1>Civic Hub</h1>
                </a>
            </div>
            <div class="hamburger"> 
            <i class="fa-solid fa-bars"></i>
        </div>
            { loggedIn ? LogoutButton : <div className="buttons" style={{ marginLeft: 'auto' }}>
                <a href="/login" className="login"><button>Login</button></a>
                <a href="/register" className="signup"><button>Sign Up</button></a>
            </div>}
        </header>
    );
};

//document.body.style.marginTop = '60px';
export default Header;
