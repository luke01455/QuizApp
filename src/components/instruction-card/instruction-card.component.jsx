import React from 'react';
import './instruction-card.styles.scss';

import trophy from '../../assets/icons/surface1@2x.png'
import check from '../../assets/icons/check@2x.png' 
import dice from '../../assets/icons/dice@2x.png' 

const InstructionCard = ({icon}) => {
    return (
        <div className='instruction-card-container'>
            {/* <div> <img src={icon === 'check' ? {check} : icon === 'trophy' ? {trophy} : {dice} }></img>  </div> */}
            <div> 
                { icon === 'check' ? <img src={check}></img> : icon === 'trophy' ? <img src={trophy}></img> : <img src={dice}></img>}
                  </div>
            <div>
                <h1> number </h1>
                <h3> instruction description </h3>
            </div>
        </div>
    )
}

export default InstructionCard;