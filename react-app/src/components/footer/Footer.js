import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='Github'>
                <a className='footerLink'  href='https://github.com/itsjoonie/Bobafied' target='_blank' rel='noreferrer'>
                <i class='fab fa-github fa-2x' />
                </a>
            </div>
            <div className='linkedIn'>
                <a className='footerLink' href='https://www.linkedin.com/in/itisjun/' target='_blank' rel='noreferrer'>
                <i class='fab fa-linkedin fa-2x'></i>
                </a>
 
            </div>
            


        </div>
    )
}

export default Footer;