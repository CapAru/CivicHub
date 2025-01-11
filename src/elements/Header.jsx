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
            <div>
                <h1>CivicHub</h1>
            </div>
            <div className="buttons" style={{ marginLeft: 'auto' }}>
                <button className="login">Login</button>
                <button className="signup">Sign Up</button>
            </div>
        </header>
    );
};
document.body.style.marginTop = '60px';
export default Header;
