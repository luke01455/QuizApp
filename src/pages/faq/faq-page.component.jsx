import React from 'react';
import './faq-page.styles.scss';

import Header from '../../components/header/header.component'

const FaqPage = () => {
    return (
        <div className='faq-page-container'>
            <Header transparency='nontransparent'/>
            <div className='faq-page-wrapper'>
            <h1> FREQUENTLY ASKED QUESTIONS </h1>
            <p> How many times can I enter? </p>
            <p> How will a winner be selected? </p>
            <p> When does the competition close? </p>
            <p> If I win how do i collect my prize? </p>
            </div>
        </div>
    )
}

export default FaqPage;