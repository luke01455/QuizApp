import React from 'react';
import './shop-page.styles.scss'

import Header from '../../components/header/header.component'

const ShopPage = () => {

    return (
        <div className='shop-page-container'>
            <Header transparency='nontransparent'/>
            <h1 className='shop-page-title'> Shop </h1>
            <div className='buy-coins-options'>
                <div className='buy-coins-option'>1000</div>
                <div className='buy-coins-option'>2500</div>
                <div className='buy-coins-option'>5000</div>
                <div className='buy-coins-option'>10000</div>
            </div>
            <div className='buy-prizes-options'>
                <div className='buy-prize-option'>Amazon gift certificate - £50</div>
                <div className='buy-prize-option'>Amazon gift certificate - £250</div>
                <div className='buy-prize-option'>Rolex</div>
                <div className='buy-prize-option'>New Car</div>

            </div>
        </div>
    )
}

export default ShopPage;