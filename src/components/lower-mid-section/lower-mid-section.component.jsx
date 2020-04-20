import React, { useState, useEffect, useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import './lower-mid-section.styles.scss'


import { FETCH_QUIZZES_QUERY } from '../../util/graphql'
import { AuthContext } from '../../context/auth'

import QuizCard from '../quiz-card/quiz-card.component'
import Spinner from '../spinner/spinner.component'
import CTAButton from '../cta-button/cta-button.component'

const LowerMidSection = () => {
    const context = useContext(AuthContext)
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
            {
                context.user ? 
                <Link className='underline-remove' to='/quizselect'>
                    <div className='lower-mid-cta'> <CTAButton> start now </CTAButton> </div>
                </Link>
                 :
                <Link className='underline-remove' onClick={() => context.loginModalToggle()}>
                    <div className='lower-mid-cta'> <CTAButton> start now </CTAButton> </div>
                </Link>
            }

        </div>
    )
}

export default LowerMidSection;