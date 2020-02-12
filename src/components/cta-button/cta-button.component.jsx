import React from 'react'

import './cta-button.styles.scss'

const CTAButton = ({children, inverted, ...props}) => (
    <button  className={`${inverted ? 'inverted' : ''} custom-button`} {...props}>
        {children}
    </button>
)

export default CTAButton;