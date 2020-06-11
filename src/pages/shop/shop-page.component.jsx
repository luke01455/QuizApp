import React from 'react';
import './shop-page.styles.scss'

import ShopItem from '../../components/shop-item/shop-item.component'
import Header from '../../components/header/header.component'
import Footer from '../../components/footer/footer.component'

const ShopPage = () => {

    return (
                <div className='shop-select-container'>
                <Header transparency='nontransparent' color='green' />
            <div className='shop-select-title'> <h1> Shop </h1></div>
                <div className='shop-selection-carousel'>
                    <ShopItem>1000</ShopItem>
                    <ShopItem>2500</ShopItem>
                    <ShopItem>5000</ShopItem>
                    <ShopItem>10000</ShopItem>
                </div>
                <div className='shop-selection-carousel'>
                    <ShopItem>Amazon gift certificate - £50</ShopItem>
                    <ShopItem>Amazon gift certificate - £250</ShopItem>
                    <ShopItem>Rolex</ShopItem>
                    <ShopItem>New Car</ShopItem>
                </div>
                <Footer />
            </div>
    )
}

export default ShopPage;