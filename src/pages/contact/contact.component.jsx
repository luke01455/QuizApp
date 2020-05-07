import React from 'react';
import './contact.styles.css';

import Header from '../../components/header/header.component'
import Footer from '../../components/footer/footer.component'

const ContactPage = () => {


    return (
        <div>
            <Header transparency='nontransparent' />

            <div className="bg-contact2">
                <div className="container-contact2">
                    <div className="wrap-contact2">
                    <form className="contact2-form validate-form">
					<span className="contact2-form-title">
						Contact Us
					</span>
					<div className="wrap-input2 validate-input" data-validate="Name is required">
						<input className="input2" type="text" name="name"></input>
						<span className="focus-input2" data-placeholder="NAME"></span>
					</div>

					<div className="wrap-input2 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input2" type="text" name="email"></input>
						<span className="focus-input2" data-placeholder="EMAIL"></span>
					</div>

					<div className="wrap-input2 validate-input" data-validate = "Message is required">
						<textarea className="input2" name="message"></textarea>
						<span className="focus-input2" data-placeholder="MESSAGE"></span>
					</div>

					<div className="container-contact2-form-btn">
							<div className="contact2-form-bgbtn"></div>
							<div className='testbground'>
			<button className="button15">
								<a>Send Your Message</a>
							</button>
							</div>
					</div>
				</form>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )

};


export default ContactPage;