import React from 'react';
import './quiz-select.styles.scss';

import Header from '../../components/header/header.component'
import QuizCard from '../../components/quiz-card/quiz-card.component'

const QuizSelect = () => {

        return (
                <div className='quiz-select-container'>
                        <Header transparency='nontransparent'/>
                        <div className='quiz-selection-carousel'>
                                <QuizCard size='large'/>
                                <QuizCard size='large'/>
                                <QuizCard size='large'/>
                        </div>
                        <div className='quiz-selection-carousel'>
                                <QuizCard size='large'/>
                                <QuizCard size='large'/>
                                <QuizCard size='large'/>
                        </div>
                        
                </div>
        )

}

export default QuizSelect;