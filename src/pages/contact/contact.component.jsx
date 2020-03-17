import React from 'react';
import './contact.styles.scss';

import Header from '../../components/header/header.component'
import Footer from '../../components/footer/footer.component'

const ContactPage = () => {

    
    return (
        <div> 
            <Header transparency='nontransparent' />
            <div className='contact-page-container'>
                Contact
            </div>
             
            <Footer />
            </div>
    )

};


export default ContactPage;