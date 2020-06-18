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
            <h1 className='shop-carousel-title'> Buy coins </h1>
            <div className='shop-selection-carousel'>
                <div className='shop-section-divider'>
                    <ShopItem isBuying='buy' item='1000 coins' price='£5.99' />
                    <ShopItem isBuying='buy' item='2500 coins' price='£12.99' />
                </div>
                <div className='shop-section-divider'>
                    <ShopItem isBuying='buy' item='5000 coins' price='£23.99' />
                    <ShopItem isBuying='buy' item='10000 coins' price='£45.99' />
                </div>
            </div>
            <h1 className='shop-carousel-title'> Get Prizes! </h1>
            <div className='shop-selection-carousel'>
                <div className='shop-section-divider'>
                    <ShopItem
                        item='Amazon gift card - £50'
                        price='12000 coins'
                        itemImg='https://news.bitcoin.com/wp-content/uploads/2019/06/amazon-gift-cards-1024x768.jpg'
                    />
                    <ShopItem
                        item='Amazon gift card - £250'
                        price='50000 coins'
                        itemImg='https://news.bitcoin.com/wp-content/uploads/2019/06/amazon-gift-cards-1024x768.jpg'
                    />
                </div>
                <div className='shop-section-divider'>
                    <ShopItem item='Rolex'
                        price='£7.99'
                        price='175000 coins'
                        itemImg='https://content.rolex.com/dam/watches/family-pages/datejust/watches-search_datejust_m126333-0010_1802jva_001_r.jpg' />
                    <ShopItem
                        pictureSize='largePic'
                        cardSize='largeBig'
                        itemImg='https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/flexslider_full/public/slideshow_image/1-intro-ferrari-suv-sept-2019-preview.jpg?itok=q7ItA_2W'
                        item='New Car'
                        price='£7.99'
                        price='1000000 coins'
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ShopPage;