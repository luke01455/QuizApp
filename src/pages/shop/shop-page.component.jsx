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
                    <ShopItem item='1000 coins' price='£5.99'/>
                    <ShopItem item='2500 coins' price='£12.99'/>
                    <ShopItem item='5000 coins' price='£23.99'/>
                    <ShopItem item='10000 coins' price='£45.99'/>
                </div>
                <div className='shop-selection-carousel'>
                    <ShopItem item='Amazon gift certificate - £50'  price='12000 coins'/>
                    <ShopItem item='Amazon gift certificate - £250'  price='50000 coins'/>
                    <ShopItem item='Rolex'  price='£7.99' price='175000 coins'/>
                    <ShopItem item='New Car'  price='£7.99'  price='1000000 coins'/>
                </div>
                <Footer />
            </div>
    )
}

export default ShopPage;