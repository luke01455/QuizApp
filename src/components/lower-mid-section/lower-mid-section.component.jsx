import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks'
import './lower-mid-section.styles.scss';

import { FETCH_QUIZZES_QUERY } from '../../util/graphql'

import QuizCard from '../quiz-card/quiz-card.component'
import Spinner from '../spinner/spinner.component'
import CTAButton from '../cta-button/cta-button.component'
 
const LowerMidSection = () => {

    const [quizzes, setQuizzes] = useState([]);
    const { loading, data } = useQuery(FETCH_QUIZZES_QUERY)

    useEffect(() => {
        if (data) {
            setQuizzes(data.getQuiz);
        }
    }, [data]);

    return (
        <div className='lower-mid-container'>
            <h2> Select a Quiz </h2>
            <div className='quiz-card-container'> 
                {loading ?
                    (<Spinner />) :
                    (
                        quizzes &&
                        quizzes.map(quiz => {
                            return quiz.isActive === 'filling' &&
                                (
                                    <QuizCard
                                        size='large'
                                        key={quiz.id}
                                        title={quiz.quizType === 'Music' ? 'Music' : 'Sport'}
                                        userCount={quiz.userCount}
                                        maxUsers={quiz.maxUsers}
                                        price={quiz.price}
                                        id={quiz.id}
                                        prize={quiz.prize}
                                    />
                                )
                        })
                    )}
            </div>
                        <div className='lower-mid-cta'><CTAButton> Start Now </CTAButton></div>
            
        </div>
    )
}

export default LowerMidSection;