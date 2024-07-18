import React from 'react';

const Header = ({ imgSrc,address }) => {
    const backgroundStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        color: 'white',
        textAlign: 'center',
    };

    return (
        <header>
            <div style={backgroundStyles}>
                <h1>YOUR NEIGHBOR JUST SOLD {address} OVER LIST PRICE!</h1>
            </div>
        </header>
    );
};

export default Header;
