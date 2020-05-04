import React, { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import './lower-mid-section.styles.scss'

import { FETCH_QUIZZES_QUERY } from '../../util/graphql'
import { AuthContext } from '../../context/auth'

import QuizCard from '../quiz-card/quiz-card.component'
import Spinner from '../spinner/spinner.component'
import CTAButton from '../cta-button/cta-button.component'

const LowerMidSection = ({ scrollLocation }) => {
    const context = useContext(AuthContext)
    const [quizzes, setQuizzes] = useState([]);
    const { loading, data } = useQuery(FETCH_QUIZZES_QUERY)

    const [animationIsVisible, setAnimationVisible] = useState(false)

    useEffect(() => {
        if (scrollLocation >= 650 && scrollLocation <= 1700) {
            setAnimationVisible(1)
        } else {
            setAnimationVisible(75 * 1.4)
        }
    }, [scrollLocation])


    useEffect(() => {
        if (data) {
            setQuizzes(data.getQuiz);
        }
    }, [data]);

    return (
        <div className='lower-mid-container'>
            <div className='masking-border'>
            <motion.h2
                initial={{ y: 75 * 1.4 }}
                animate={{ y: animationIsVisible }}
                exit={{ y: 75 * 1.4 }}
                transition={{ y: { duration: 0.7 } }}
            >
                Select a Quiz </motion.h2>
            </div>
            <div className='quiz-card-container'>
                {loading ?
                    (<Spinner />) :
                    (
                        quizzes &&
                        quizzes.map(quiz => {
                            return quiz.isActive === 'filling' &&
                                (
                                    <div className='line-breaker'>
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
                                    </div>
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
                    <div className='underline-remove' onClick={() => context.loginModalToggle()}>
                        <div className='lower-mid-cta'> <CTAButton> start now </CTAButton> </div>
                    </div>
            }

        </div>
    )
}

export default LowerMidSection;