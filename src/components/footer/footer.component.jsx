import React from 'react'
import { Link } from 'react-router-dom'

import './footer.styles.scss'

import twitterIcon from '../../assets/icons/bxl-twitter.svg'
import facebookIcon from '../../assets/icons/bxl-facebook.svg'
import githubIcon from '../../assets/icons/bxl-github.svg'
import instaIcon from '../../assets/icons/bxl-instagram-alt.svg'


const Footer = ({position}) => {
    return (
        <div className={`footer-container ${position}`}>
            <div className='top-footer-section'>
                <Link to='/faqs' className='footer-link'> FAQ's </Link>
                <Link to='/' className='footer-link'> Newsletter </Link>
                <Link to='/contact' className='footer-link'> Info </Link>
            </div>
            <div className='lower-footer-section'>
                <div className='upper-footer-link-container'>
                    <Link to='/' className='footer-link'> Copyright © 2020 </Link>
                </div>
            </div>
            <div className='socials-footer'>
                <Link className='footer-socials-link' to='/'> <img className='social-icon' src={twitterIcon} alt='twitter'/> </Link>
                <Link className='footer-socials-link' to='/'> <img className='social-icon' src={facebookIcon} alt='fb'/> </Link>
                <Link className='footer-socials-link' to='/'> <img className='social-icon' src={githubIcon} alt='gh'/> </Link>
                <Link className='footer-socials-link' to='/'> <img className='social-icon' src={instaIcon} alt='insta'/> </Link>
            </div>

        </div>
    );
};

export default Footer;
