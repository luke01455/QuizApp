import React, { lazy, Suspense, useState } from 'react';
import './quiz-page.styles.scss';
import gql from 'graphql-tag'
import { useMutation } from "@apollo/react-hooks";

import Spinner from '../../components/spinner/spinner.component';

const QuizModalMusic = lazy(() => import('../../components/quiz-modal-music/quiz-modal-music.component'));
const QuizModalSport = lazy(() => import('../../components/quiz-modal-sport/quiz-modal-sport.component'));



const QuizPage = (props) => {
    const strArr = window.location.href.split("/");
    const arrLength = strArr.length;
    const quizId = strArr[arrLength-2];
    const quizTitle = strArr[arrLength-2]
    const [modalOnOff, setModalOnOff] = useState(false);

    const [beginQuiz] = useMutation(ENTER_QUIZ_MUTATION, {
        update(proxy, { data }) {
            props.history.push(`/quiz/${quizTitle}/${quizId}/${data.createScore.usersScores[0].id}`)  
        },
        variables: {
            quizId,
            score: 0
        }
    })

    const onStart = () => {
        beginQuiz()
        setModalOnOff(!modalOnOff)
    }

     return (
        <div className='quiz-page-container'>
            <div> Get all the questions right to win the Prize</div>
            <button className='start-quiz-button' onClick={() => onStart()}> START QUIZ </button>
            {
                modalOnOff ? <Suspense fallback={<Spinner />}> {quizTitle === 'MUSIC' ? <QuizModalMusic /> : <QuizModalSport />} </Suspense> : <div></div>
            }
        </div>
    )
}

const ENTER_QUIZ_MUTATION = gql`
mutation createScore($quizId: String!, $score: Int!){
    createScore(quizId: $quizId, score: $score){
        id
        usersScores {
            id
            score
            createdAt
        }
    }
}
`

export default QuizPage;
