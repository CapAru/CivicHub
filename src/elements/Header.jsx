import React from 'react';

const Header = () => {
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
            <div className="hamburger"> 
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className="buttons" style={{ marginLeft: 'auto' }}>
                <a href="/login" className="login"><button>Login</button></a>
                <a href="/register" className="signup"><button>Sign Up</button></a>
            </div>
        </header>
    );
};

//document.body.style.marginTop = '60px';
export default Header;
