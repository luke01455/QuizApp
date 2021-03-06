import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import './bottom-landing-page.styles.scss';

import { AuthContext } from '../../context/auth'

import CTAButton from '../cta-button/cta-button.component'
import Footer from '../footer/footer.component'
const BottomLanding = () => {

    const context = useContext(AuthContext)

    return (
        <div className='bottom-landing-container'>
            <div className='bottom-landing-text'>
                <h1> TEST YOUR KNOWLEDGE </h1>
                <h3> GET YOUR QUESTIONS  <br/> RIGHT TO WIN THE PRIZE </h3>
            </div>
            {
                context.user ? 
                <Link className='underline-remove' to='/quizselect'>
                    <div className='bottom-landing-cta'> <CTAButton> TRY IT NOW </CTAButton> </div>
                </Link>
                 :
                <div className='underline-remove' onClick={() => context.loginModalToggle()}>
                    <div className='bottom-landing-cta'> <CTAButton> TRY IT NOW </CTAButton> </div>
                </div>
            }
            {/* <Footer /> */}
        </div>
    )
}

export default BottomLanding;