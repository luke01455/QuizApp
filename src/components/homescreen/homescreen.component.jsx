import React from 'react';
import './homescreen.styles.scss';

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import CTAButton from '../cta-button/cta-button.component'
import QuizCard from '../quiz-card/quiz-card.component'

const HomeScreen = () => {
    return (
        <div className='homescreen-container'>
            <div className='text-container'>
                <h1> 
                    {/* EARN CASH WITH YOUR SPORT KNOWLEDGE */}
                    Earn cash with your sport knowledge
                     </h1>
            </div>
            {/* <button className=''> Find out more </button> */}
            <div className='cta-container'>
                <Link to='/signin'><CTAButton> Start Playing </CTAButton></Link>
            </div>
            
            <button className='page-down-btn'> <FontAwesomeIcon icon={faChevronDown} /> </button>

        </div>
    )
}

export default HomeScreen;