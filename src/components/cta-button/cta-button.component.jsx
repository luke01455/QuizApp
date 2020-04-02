import React from 'react'

import './cta-button.styles.scss'

const CTAButton = ({children, inverted, ...props}) => (
    <div className='nounderline'>
    <button  className={`${inverted ? 'inverted' : ''} custom-button`} {...props}>
        {children}
    </button>
    </div>
)

export default CTAButton;