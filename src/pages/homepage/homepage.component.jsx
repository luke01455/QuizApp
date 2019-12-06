import React from 'react';
import './homepage.styles.scss';

import PrizeOption from '../../components/prize-option/prize-option.component';

const HomePage = () => {
    return (
        <div className='homepage-container'>
        <PrizeOption imageUrl='https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/news-listicle/image/2019/06/03etronabudhabi36.jpg?itok=qs0ugkO6' title='car'></PrizeOption>
        <PrizeOption title='boat'></PrizeOption>
        <PrizeOption title='house'></PrizeOption>
        <PrizeOption title='motorbike'></PrizeOption>
        <PrizeOption title='pc'></PrizeOption>
        </div>
    )
}

export default HomePage;
