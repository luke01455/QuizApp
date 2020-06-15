import React from 'react';
import { Link } from 'react-router-dom'
import './shop-item.styles.scss';

import coinimg from '../../assets/icons/pngbarn.png'

const ShopItem = ({ cardSize, pictureSize, title, price, id, item, history, isBuying, itemImg }) => {

    return (
        <div className={`shop-item-container ${cardSize}`} >
           <div className='info-container'>
                <h3 className='top-text-container'> {item} </h3>
                <div className={`prize-picture-container ${pictureSize}`}>
                        <img className='prize-picture' src={ itemImg ? itemImg : coinimg}></img>
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