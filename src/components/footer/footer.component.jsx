import React from 'react'

import './footer.styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='top-footer-section'>
                <div className='footer-1'> FAQ's </div>
                <div className='footer-2'> NEWSLETTER </div>
                <div className='footer-3'> INFO </div>
            </div>
            <div className='socials-footer'>
                <button className='footer-social-button'> <FontAwesomeIcon icon={faHashtag} /> </button>
                <button className='footer-social-button'> FaceB /> </button>
                <button className='footer-social-button'> Twitt /> </button>
                <button className='footer-social-button'> Github /> </button>
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
