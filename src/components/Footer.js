import React, { useState } from 'react';
// import './Footer.css';
import MunisePortrait from '../images/MunisePortrait.jpg';

function Footer({ address }) {
    const [isHovered, setIsHovered] = useState(false);
    const footerStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c34',
        color: 'white',
    };

    const contentStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%',
    };

    const textStyles = {
        flex: 1,
        textAlign: 'left',
        padding: '1rem',
    };

    const imageStyles = {
        backgroundImage: `url(${MunisePortrait})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100px',
        height: '100px',
    };

    const contactStyles = {
        flex: 1,
        textAlign: 'left',
        padding: '1rem',
    };

    const linkStyles = {
        color: isHovered ? 'gray' : 'white',
        textDecoration: 'underline',
    };

    return (
        <footer style={footerStyles}>
            <div style={contentStyles}>
                <div style={textStyles}>
                    <h2>{address}</h2>
                </div>
                <div style={imageStyles}></div>
                <div style={contactStyles}>
                    <h3>Contact Us</h3>
                    <p>Email: munise@homesmartsuccessrealty.com</p>
                    <p> 
                        <a href={'https://homesmart.com/real-estate-agent/new-hampshire/bedford/58132-munise-ulker/Welcome'}
                        style={linkStyles}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>Website
                        </a>
                    </p>
                    <p>Phone: (603) 233-7760</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;