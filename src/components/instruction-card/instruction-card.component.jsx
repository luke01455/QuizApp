import React from 'react';
import './instruction-card.styles.scss';

import trophy from '../../assets/icons/surface1@2x.png'
import check from '../../assets/icons/check@2x.png'
import dice from '../../assets/icons/dice@2x.png'

const InstructionCard = ({ icon, number, instruction }) => {
    return (
        <div className='instruction-card-container'>
            {/* <div> <img src={icon === 'check' ? {check} : icon === 'trophy' ? {trophy} : {dice} }></img>  </div> */}
            <div className='instruction-icon-container'>
                {
                icon === 'check' ? <img className='instruction-icon' src={check}></img>
                : icon === 'trophy' ? <img className='instruction-icon' src={trophy}></img> 
                : <img className='instruction-icon' src={dice}></img>
                 }
            </div>
            <div className='instruction-text-container'>
                <h1> {number} </h1>
                <h3> {instruction} </h3>
            </div>
        </div>
    )
}

export default InstructionCard;