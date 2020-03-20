import React from 'react'

import './footer.styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

import twitterIcon from '../../assets/icons/bxl-twitter.svg'
import facebookIcon from '../../assets/icons/bxl-facebook.svg'
import githubIcon from '../../assets/icons/bxl-github.svg'
import instaIcon from '../../assets/icons/bxl-instagram-alt.svg'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='top-footer-section'>
                <div className='footer-1'> FAQ's </div>
                <div className='footer-2'> NEWSLETTER </div>
                <div className='footer-3'> INFO </div>
            </div>
            <div className='socials-footer'>
                <button className='footer-social-button'> <img src={twitterIcon}/> </button>
                <button className='footer-social-button'> <img src={facebookIcon}/> </button>
                <button className='footer-social-button'> <img src={githubIcon}/> </button>
                <button className='footer-social-button'> <img src={instaIcon}/> </button>
            </div>
            <div className='lower-footer-section'>
                <div> SITE INFO BLA </div>
                <div> COPYRIGHT BLA BLA </div>
                <div> TERMS AND CONDITIONS | PRIVACY | LEGAL NOTICE </div>
            </div>
        </div>
    );
};

export default Footer;
