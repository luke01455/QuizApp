import React from 'react'

import './cta-button.styles.scss'

const CTAButton = ({children, inverted, ...props}) => (
    <a className='nounderline'>
    <button  className={`${inverted ? 'inverted' : ''} custom-button`} {...props}>
        {children}
    </button>
    </a>
)

export default CTAButton;