import React, { useContext, useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks'
import './homepage.styles.scss';

import Spinner from '../../components/spinner/spinner.component'
import { AuthContext } from '../../context/auth'
import { FETCH_QUIZZES_QUERY } from '../../util/graphql'
import PrizeOption from '../../components/prize-option/prize-option.component';
import MidSection from '../../components/mid-section/mid-section.component';

const HomePage = () => {
    const [quizzes, setQuizzes] = useState([]);
    const { user } = useContext(AuthContext)
    const { loading, data } = useQuery(FETCH_QUIZZES_QUERY)

    const sportImg = 'https://www.proprofs.com/quiz-school/topic_images/p18lq7ediepl816p6s04171vo23.jpg'
    const musicImg = 'https://www.holmfirthevents.co.uk/wp-content/uploads/2016/03/993564_10156503496795467_8252929934433432258_n.jpg'

    useEffect(() => {
        if (data) {
            setQuizzes(data.getQuiz);
        }
    }, [data]);

    return (
        <div className='homepage-container'>
            <div className='prize-option-container'>
                {loading ? 
                (<Spinner />) :
                 (
                    quizzes &&
                    quizzes.map((quiz) => (
                        <PrizeOption key={quiz.id} imageUrl={quiz.type === 'Music' ? musicImg : sportImg} title={quiz.type === 'Music' ? 'MUSIC' : 'SPORT'}/>
                    ))
            )}
    
            </div>


            <MidSection />
        </div>
    )
}

// 
export default HomePage;