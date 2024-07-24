import React from 'react';

const Header = ({ imgSrc, address,price }) => {
    const backgroundStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#282c34', // Added background color
        height: '50vh', // or a different value to suit your needs
        color: 'white',
        textAlign: 'center',
    };
    

    return (
        <header>
            <div style={backgroundStyles}>
                <h1>YOUR NEIGHBOR JUST SOLD {address} FOR ${price}!</h1>
            </div>
        </header>
    );
};

export default Header;
