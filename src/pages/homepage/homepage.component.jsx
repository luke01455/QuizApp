import React from 'react';
import './homepage.styles.scss';

import PrizeOption from '../../components/prize-option/prize-option.component';
import MidSection from '../../components/mid-section/mid-section.component';

const HomePage = () => {
    return (
        <div className='homepage-container'>
            <div className='prize-option-container'>
            <PrizeOption imageUrl='https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/news-listicle/image/2019/06/03etronabudhabi36.jpg?itok=qs0ugkO6' title='car'></PrizeOption>
        <PrizeOption imageUrl='https://cdn.samboat.fr/announcements/5cabb51900d9b-l.jpg' title='boat'></PrizeOption>
            </div>

        <MidSection />
        </div>
    )
}

export default HomePage;