import React from 'react';
import './homepage.styles.scss';

import PrizeOption from '../../components/prize-option/prize-option.component';

const HomePage = () => {
    return (
        <div className='homepage-container'>
        <PrizeOption title='Car'></PrizeOption>
        <PrizeOption title='Boat'></PrizeOption>
        <PrizeOption title='House'></PrizeOption>
        <PrizeOption title='Motorbike'></PrizeOption>
        <PrizeOption title='PC'></PrizeOption>
        </div>
    )
}

export default HomePage;
