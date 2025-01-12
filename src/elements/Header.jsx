import React, { useState, useEffect } from "react";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    function login(){
        setLoggedIn(true)
    }
    const LogoutButton = (
        <div className='flex items-center mx-4'>
            <a href="/issue" className="mr-16"><button>Submit Issue</button></a>  
            <div className="logout" o style={{ cursor: 'pointer' }}>
                <IoIosLogOut className='text-2xl text-center'/>
            </div>
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
      )}
    </header>
  );
};

export default Header;
