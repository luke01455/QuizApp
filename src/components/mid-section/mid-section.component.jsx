import React from 'react';
import './mid-section.styles.scss';

import InstructionCard from '../instruction-card/instruction-card.component'


const MidSection = () => {
    return (
        <div className='mid-section-container'>
            <div className='circle-decoration'></div>
            {/* <h2> All of those days sitting on the couch watching BT Sport can finally be put to use. </h2> */}
            <h2> Follow these steps: </h2>
            <div className='instruction-container'>
                {/* <div className='instruction-section'>
                    <h1> 1 </h1>
                    <h3> To enter, pick a quiz with a prize you'd like to win </h3>
                    <QuizCard size='example' />
                </div> */}
                <InstructionCard icon='trophy' number='1' instruction='To Enter, Pick A Prize Youd Like To Win'/>
                <InstructionCard icon='check' number='2' instruction='Answer 5 Simple Questions'/>
                <InstructionCard icon='dice' number='3' instruction='More Correct Answers More Chances To Win'/>
            </div>
        </div>
    )
}

export default MidSection;