import React from 'react';
import { Link } from 'react-router-dom'
import './shop-item.styles.scss';

import coinimg from '../../assets/icons/pngbarn.png'

const ShopItem = ({ size, title, userCount, maxUsers, price, id, item, history, isBuying }) => {

    return (
        <div className={`card-container ${size}`} >
           {/* <div className='prize-picture-container'>
               <div className='quiz-prize-name'> {prize ? prize : 'unknown'}  </div>
           </div> */}
           <div className='info-container'>
                <h3 className='top-text-container'> {item} </h3>
                <div className='prize-picture-container'>
                        <img className='prize-picture' src={coinimg}></img>
                    </div>
                <div className='lower-text-container'>

                    <p> {price} </p>
                </div>
                <Link className='enter-quiz-button' to={`quiz/${title}/${id}`}> { isBuying ? 'Buy Now' : 'Redeem Now'} </Link>
           </div>
        </div>
    )
}

export default ShopItem;