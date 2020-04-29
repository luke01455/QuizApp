import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import './mid-section.styles.scss';

import InstructionCard from '../instruction-card/instruction-card.component'


const MidSection = ( { scrollLocation }) => {
    
    const [ animationIsVisible, setAnimationVisible ] = useState(false)

    useEffect(() => {
        if (scrollLocation >= 110 && scrollLocation <= 1200) {
            setAnimationVisible(1)
        } else {
            setAnimationVisible(75 * 1.2)
        }
    }, [scrollLocation])


    return (
        <div className='mid-section-container'>
            <div className='circle-decoration'></div>
            {/* <h2> All of those days sitting on the couch watching BT Sport can finally be put to use. </h2> */}
            <div className='masking-border'>
            <motion.h2   
            initial={{ y: 75 * 1.2 }}
            animate={{ y: animationIsVisible }}
            exit={{ y: 75 * 1.2 }}
            transition={{ y: { duration: 0.5} }}
            >
            Follow these steps: 
            </motion.h2>
            </div>
            <div className='instruction-container'>
                {/* <div className='instruction-section'>
                    <h1> 1 </h1>
                    <h3> To enter, pick a quiz with a prize you'd like to win </h3>
                    <QuizCard size='example' />
                </div> */}
                <InstructionCard beginAnimation={90} scrollLocation={scrollLocation} animationTime={0.5} icon='trophy' number='1' instruction='To Enter, Pick A Prize Youd Like To Win'/>
                <InstructionCard beginAnimation={170} scrollLocation={scrollLocation} animationTime={0.6} icon='check' number='2' instruction='Answer 5 Simple Questions'/>
                <InstructionCard beginAnimation={210} scrollLocation={scrollLocation} animationTime={0.7} icon='dice' number='3' instruction='More Correct Answers More Chances To Win'/>
            </div>
        </div>
    )
}

export default MidSection;