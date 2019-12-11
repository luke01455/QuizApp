import React, { lazy, Suspense, useState } from 'react';
import './quiz-page.styles.scss';

import Spinner from '../../components/spinner/spinner.component';

const QuizModalMusic = lazy(() => import('../../components/quiz-modal-music/quiz-modal-music.component'));
const QuizModalSport = lazy(() => import('../../components/quiz-modal-sport/quiz-modal-sport.component'));



const QuizPage = () => {
    const strArr = window.location.href.split("/");
    const arrLength = strArr.length;
    const quizName = strArr[arrLength-1];
    const [modalOnOff, setModalOnOff] = useState(false);
    return (
        <div className='quiz-page-container'>
            <div> Get all the questions right to win the {quizName}</div>
            <button className='start-quiz-button' onClick={() => setModalOnOff(!modalOnOff)}> START QUIZ </button>
            {
                modalOnOff ? <Suspense fallback={<Spinner />}> {quizName === 'car' ? <QuizModalMusic /> : <QuizModalSport />} </Suspense> : <div></div>
            }
        </div>
    )
}

export default QuizPage;
