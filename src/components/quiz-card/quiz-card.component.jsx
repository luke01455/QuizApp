import React from 'react';
import { Link } from 'react-router-dom'
import './quiz-card.styles.scss';

const QuizCard = ({ size, title, userCount, maxUsers, price, id, history }) => {
    const openQuiz = () => {
      }

    return (
        <div className={`card-container ${size}`} >
           <div className='prize-picture-container'></div>
           <div className='info-container'>
                <h3 className='top-text-container'> {title} </h3>
                <div className='lower-text-container'>
                    <p> {price} </p> <p> {userCount}/{maxUsers} </p>
                </div>
                <Link className='enter-quiz-button' to={`quiz/${title}/${id}`}> See Details </Link>
           </div>
        </div>
    )
}

export default QuizCard;