import React from 'react';
import './quiz-card.styles.scss';

const QuizCard = ({ size, title, minEntries, maxEntries, price }) => {
    return (
        <div className={`card-container ${size}`}>
           <div className='prize-picture-container'></div>
           <div className='info-container'>
                <h3 className='top-text-container'> Apple Watch 3</h3>
                <div className='lower-text-container'>
                    <p> £2.99 </p> <p> 5/100 </p>
                </div>
           </div>
        </div>
    )
}

export default QuizCard;