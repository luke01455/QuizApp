import React from 'react';
import './instruction-card.styles.scss';

const InstructionCard = () => {
    return (
        <div className='instruction-card-container'>
            <div> picture </div>
            <div>
                <h1> number </h1>
                <h3> instruction description </h3>
            </div>
        </div>
    )
}

export default InstructionCard;