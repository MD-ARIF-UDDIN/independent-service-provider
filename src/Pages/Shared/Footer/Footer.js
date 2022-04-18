import React from 'react';
import './Footer.css';


const Footer = () => {
    const date=new Date();
    return (
        <footer id="footer">
            <div>
            <p className='text-center'><small>copyright Lens king {date.getFullYear()}</small><br />All rights and reserved</p>

            
            </div>
            
        </footer>
    );
};

export default Footer;