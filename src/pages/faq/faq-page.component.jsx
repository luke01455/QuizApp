import React, { useState } from 'react';
import './faq-page.styles.scss';

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
        <div className='faq-page-container'>
            <Header transparency='nontransparent' />
            <div className='faq-page-wrapper'>
                <h1> FREQUENTLY ASKED QUESTIONS </h1>

                <p>If you have any questions regarding how the raffle works you can find most of your questions are already answered within our FAQ’s below.</p>
                <div onClick={modalOpen(1)} className='faq-option'> <FontAwesomeIcon icon={faPlus} /> <h3> How many times can I enter? </h3> </div>
                <div onClick={modalOpen(2)} className='faq-option'> <FontAwesomeIcon icon={faPlus} /> <h3> How will a winner be selected? </h3> </div>
                <div onClick={modalOpen(3)} className='faq-option'> <FontAwesomeIcon icon={faPlus} /> <h3> When does the competition close? </h3> </div>
                <div onClick={modalOpen(4)} className='faq-option'> <FontAwesomeIcon icon={faPlus} /> <h3> If I win how do i collect my prize? </h3> </div>
            </div>
        </div>
    )
}

export default FaqPage;