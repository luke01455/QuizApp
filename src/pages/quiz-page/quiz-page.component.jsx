import React from 'react';
import './quiz-page.styles.scss';

const QuizPage = () => {
    const strArr = window.location.href.split("/");
    const arrLength = strArr.length;
    const quizName = strArr[arrLength-1];
    return (
        <div className='quiz-page-container'>
            <div> Get all the questions right to win the {quizName}</div>
            <button> START QUIZ </button>
        </div>
    )
}

export default QuizPage;
