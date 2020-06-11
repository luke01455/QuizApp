import React from 'react';
import { Link } from 'react-router-dom'
import './shop-item.styles.scss';

const ShopItem = ({ size, title, userCount, maxUsers, price, id, prize, history }) => {

    return (
        <div className={`card-container ${size}`} >
           {/* <div className='prize-picture-container'>
               <div className='quiz-prize-name'> {prize ? prize : 'unknown'}  </div>
           </div> */}
           <div className='info-container'>
                <h3 className='top-text-container'> {prize ? prize : 'unknown'} </h3>
                <div className='prize-picture-container'>
                        <img className='prize-picture' src="https://static.bigspark.com/shrine/8928/original-63aed47219.jpg"></img>
                    </div>
                <div className='lower-text-container'>

                    <p> £{price} </p> <p> {userCount}/{maxUsers} </p>
                </div>
                <Link className='enter-quiz-button' to={`quiz/${title}/${id}`}> See Details </Link>
           </div>
        </div>
    )
}

export default ShopItem;