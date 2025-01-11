import React from 'react';

const Header = () => {
    return (
        <header style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '10px', 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            backgroundColor: 'white', 
            zIndex: 1000,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
            <div className='mx-4'>
                <a href="/" style={{ textDecoration: 'none', color: 'black' }}>
                    <h1>Civic Hub</h1>
                </a>
            </div>
            <div className="buttons" style={{ marginLeft: 'auto' }}>
                <a href="/login" className="login"><button>Login</button></a>
                <a href="/register" className="signup"><button>Sign Up</button></a>
            </div>
        </header>
    );
};

document.body.style.marginTop = '60px';
export default Header;