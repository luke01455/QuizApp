import React, { useContext } from 'react';
import './homescreen.styles.scss';

import { Link } from 'react-router-dom'
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../context/auth'

import CTAButton from '../cta-button/cta-button.component'

const HomeScreen = () => {
    const { user } = useContext(AuthContext)
    const context = useContext(AuthContext)

    return (
        <div>
            <div className='homescreen-container'>
                <div className='text-container'>
                    <h1> 
                        {/* EARN CASH WITH YOUR SPORT KNOWLEDGE */}
                        EARN CASH WITH YOUR 
                        </h1>
                        <h1> SPORT KNOWLEDGE </h1>
                </div>
                {/* <button className=''> Find out more </button> */}
                <div className='cta-container'>
                    {
                        user ? <Link className='underline-remove' to='/quizselect'><CTAButton> START PLAYING </CTAButton></Link> :
                        <div className='underline-remove' onClick={() => context.loginModalToggle()}><CTAButton> PLAY NOW </CTAButton></div>
                    }
                    
                    
                </div>
                <LinkScroll activeClass="active" 
                to="section1"                 
                smooth={true}
                duration={500}
                className='page-down-btn'
                > <FontAwesomeIcon icon={faChevronDown} /> 
                </LinkScroll>
            </div>
        </div>
    )
}

export default HomeScreen;