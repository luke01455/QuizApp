import React, { useState } from 'react';
import './faq-page.styles.scss';

import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

import Footer from '../../components/footer/footer.component'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Header from '../../components/header/header.component'

const FaqPage = () => {
    const [openQuestion, setOpenQuestion] = useState(0);

    const modalOpen = (modalNum) => {
        if (modalNum === openQuestion) {
            setOpenQuestion(0)
        } else {
            setOpenQuestion(modalNum)
        }
    }

    return (
        <div>
            <div className='faq-page-circle-1'></div>
            <div className='faq-page-circle-2'></div>
            <div className='faq-page-circle-3'></div>
            <div className='faq-page-circle-4'></div>
            <div className='faq-page-circle-5'></div>
        <SlideDown>
        <div className='faq-page-container'>
            <Header transparency='nontransparent' />
            <div className='faq-page-wrapper'>
                <h1> FREQUENTLY ASKED QUESTIONS </h1>

                <p>If you have any questions regarding how the raffle works you can find most of your questions are already answered within our FAQ’s below.</p>
                
                <div onClick={() => modalOpen(1)} className='faq-option'> <FontAwesomeIcon icon={faPlus} /> <h3 className='faq-question'> How many times can I enter? </h3> </div>
                <div className={`transition-paragraph ${openQuestion === 1 ? 'show' : 'hide'}`}> 
                    You can enter each individual competition up to as many times as you want unless otherwise stated on the product page of each raffle.

                    Once all entries are in and the draw is closed, all entries will then be posted on our social media profiles and website within 72 hours. This will include your draw number to the right of your name which is what we will use in the LIVE draw to decide the winner.

                    This process allows you to watch the live draw with your corresponding raffle number(s) in hand. 
                </div>
                <div onClick={() => modalOpen(2)} className={`faq-option`}> <FontAwesomeIcon icon={faPlus} /> <h3> How will a winner be selected? </h3> </div>
                <div className={`transition-paragraph ${openQuestion === 2 ? 'show' : 'hide'}`}> SportBounty's random number generator will be used to choose a winner, the name linking to the winning number chosen, will be the winner, this is all done automatically using algorithms with no human interferance or bias involved. </div>
                <div onClick={() => modalOpen(3)} className={`faq-option`}> <FontAwesomeIcon icon={faPlus} /> <h3> When does the competition close? </h3> </div>
                <div className={`transition-paragraph ${openQuestion === 3 ? 'show' : 'hide'}`}> Each prize raffle will be drawn around 30 minutes after the last person has entered. Information relating to the draw date of each raffle is visible on each quizzes page. </div>
                <SlideDown>
                <div onClick={() => modalOpen(4)} className={`faq-option`}> <FontAwesomeIcon icon={faPlus} /> <h3> If I win how do i collect my prize? </h3> </div>
                </SlideDown>
                <div className={`transition-paragraph ${openQuestion === 4 ? 'show' : 'hide'}`}>  All prizes will be sent via post once the competition has closed. Expect your prize within 7 working days! </div>
            </div>
            
        </div>
        </SlideDown>
        <Footer position='absolute'/>
        </div>
        
    )
}

export default FaqPage;