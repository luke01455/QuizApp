import React from 'react';
import './bottom-landing-page.styles.scss';

import CTAButton from '../cta-button/cta-button.component'

const BottomLanding = () => {

    return (
        <div className='bottom-landing-container'>
            <div className='bottom-landing-text'>
                <h1> TEST YOUR KNOWLEDGE </h1>
                <h3> GET YOUR QUESTIONS  <br/> RIGHT TO WIN THE PRIZE </h3>
            </div>
            <div className='bottom-landing-cta'>
                <CTAButton> Try It Now </CTAButton>
            </div>
            
        </div>
    )
}

export default BottomLanding;