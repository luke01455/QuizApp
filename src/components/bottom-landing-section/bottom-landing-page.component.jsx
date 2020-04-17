import React from 'react';
import './bottom-landing-page.styles.scss';

import CTAButton from '../cta-button/cta-button.component'

const BottomLanding = () => {

    return (
        <div className='bottom-landing-container'>
            <div className='bottom-landing-text'>
                <h1> TEST YOUR KNOWLEDGE </h1>
                <h3> GET QUESTIONS RIGHT TO WIN THE PRIZE </h3>
            </div>
            <CTAButton> Try It Now </CTAButton>
        </div>
    )
}

export default BottomLanding;