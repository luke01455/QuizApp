import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks'
import './quiz-select.styles.scss';

import { FETCH_QUIZZES_QUERY } from '../../util/graphql'
import Header from '../../components/header/header.component'
import QuizCard from '../../components/quiz-card/quiz-card.component'
import Spinner from '../../components/spinner/spinner.component'

const QuizSelect = () => {
    const [quizzes, setQuizzes] = useState([]);
    const { loading, data } = useQuery(FETCH_QUIZZES_QUERY)

    // const sportImg = 'https://www.proprofs.com/quiz-school/topic_images/p18lq7ediepl816p6s04171vo23.jpg'
    // const musicImg = 'https://www.holmfirthevents.co.uk/wp-content/uploads/2016/03/993564_10156503496795467_8252929934433432258_n.jpg'



    useEffect(() => {
        if (data) {
            setQuizzes(data.getQuiz);
        }
    }, [data]);

    return (
        <div className='quiz-select-container'>
            <Header transparency='nontransparent' />
        <div className='quiz-select-title'> <h1> Select a Quiz </h1></div>
            <div className='quiz-selection-carousel'>
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
                                    />
                                )
                        })
                    )}

            </div>
        </div>
    )

}

export default QuizSelect;