import React from 'react';
import './quiz-page.styles.scss';
import { Link} from 'react-router-dom';

const QuizPage = () => {
    const strArr = window.location.href.split("/");
    const arrLength = strArr.length;
    const quizName = strArr[arrLength-1];
    return (
        <div className='quiz-page-container'>
            <div> Get all the questions right to win the {quizName}</div>
            <Link as='button' to={`/beginquiz`}> START QUIZ </Link>
        </div>
    )
}

export default QuizPage;
