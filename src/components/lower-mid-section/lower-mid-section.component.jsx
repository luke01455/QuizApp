import React from 'react';
import './lower-mid-section.styles.scss';

import QuizCard from '../quiz-card/quiz-card.component'


const LowerMidSection = () => {
    return (
        <div className='lower-mid-container'>
            <div className='quiz-card-container'> 
            <QuizCard />
            <QuizCard />
            <QuizCard />
            <QuizCard />
            </div>
        </div>
    )
}

export default LowerMidSection;