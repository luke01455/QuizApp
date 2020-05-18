import React from 'react'

import './cta-button.styles.scss'

const CTAButton = ({children, inverted, ...props}) => (
    <div className='nounderline'>
    <button  className={`${inverted ? 'inverted' : ''} button15`} {...props}>
        <div>{children}</div>
    </button>
    </div>
)

export default CTAButton;