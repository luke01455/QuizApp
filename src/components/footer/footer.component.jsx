import React from 'react'
import { Link } from 'react-router-dom'

import './footer.styles.scss'

import twitterIcon from '../../assets/icons/bxl-twitter.svg'
import facebookIcon from '../../assets/icons/bxl-facebook.svg'
import githubIcon from '../../assets/icons/bxl-github.svg'
import instaIcon from '../../assets/icons/bxl-instagram-alt.svg'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='top-footer-section'>
                <Link to='/faqs' className='footer-link'> FAQ's </Link>
                <Link to='/' className='footer-link'> NEWSLETTER </Link>
                <Link to='/contact' className='footer-link'> INFO </Link>
            </div>
            <div className='socials-footer'>
                <Link className='footer-socials-link' to='/'> <img className='social-icon' src={twitterIcon}/> </Link>
                <Link className='footer-socials-link' to='/'> <img className='social-icon' src={facebookIcon}/> </Link>
                <Link className='footer-socials-link' to='/'> <img className='social-icon' src={githubIcon}/> </Link>
                <Link className='footer-socials-link' to='/'> <img className='social-icon' src={instaIcon}/> </Link>
            </div>
            <div className='lower-footer-section'>
                <div className='upper-footer-link-container'>
                    <Link to='/' className='footer-link'> SITE INFO BLA </Link>
                    <Link to='/' className='footer-link'> COPYRIGHT BLA BLA </Link>
                </div>
                <div className='lower-footer-link-container'> 
                <Link to='/' className='footer-link'> TERMS AND CONDITIONS </Link> |  
                <Link to='/' className='footer-link'> PRIVACY </Link> | 
                <Link to='/' className='footer-link'> LEGAL NOTICE</Link> </div>
            </div>
        </div>
    );
};

export default Footer;
