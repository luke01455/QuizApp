import React, { useRef, useContext } from 'react';
import './homescreen.styles.scss';

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../context/auth'

import CTAButton from '../cta-button/cta-button.component'

const HomeScreen = () => {
    const { user } = useContext(AuthContext)
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
    const context = useContext(AuthContext)

    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

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
                        user ? <Link className='underline-remove' to='/quizselect'><CTAButton> Start Playing </CTAButton></Link> :
                        <Link className='underline-remove' onClick={() => context.loginModalToggle()}><CTAButton> PLAY NOW </CTAButton></Link>
                    }
                    
                    
                </div>
                
                <button   className='page-down-btn' onClick={executeScroll}> <FontAwesomeIcon icon={faChevronDown} /> </button>
            </div>
            <div ref={myRef}/>
        </div>
    )
}

export default HomeScreen;