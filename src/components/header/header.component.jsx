import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/auth'
import Register from '../../pages/register/register'
import Login from '../../pages/login/login'

import './header.styles.scss';

const Header = ({ transparency }) => {
    const context = useContext(AuthContext)

    const [headerColour, setHeaderColour] = useState('white')

    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = (e) => {
        setScrollTop(e.target.documentElement.scrollTop);
    }

    const [loginModal, setLoginModal] = useState(false)
    const [signUpModal, setSignUpModal] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (scrollTop > vh - 50) {
            setHeaderColour('black')
        } else {
            setHeaderColour('white')
        }
    }, [scrollTop])


    return (
        <div>
        <div className={`header ${transparency} ${headerColour}`}>
            <Link className={`logo-container ${headerColour}`} to='/'>
                <h1 className='header-logo'> Sport Bounty </h1>
            </Link>
            <div className='options'>
                <Link className={`option ${headerColour}`} to='/contact'> CONTACT </Link>
                <Link className={`option ${headerColour}`} to='/faqs'> FAQ'S </Link>
                {context.user ?
                    <Link className={`option ${headerColour}`} to='/account'>{context.user.username.toUpperCase()}</Link>
                    :
                    <div className={`option ${headerColour}`} onClick={() => setLoginModal(!loginModal)}>SIGN IN</div>
                }
                {context.user ?
                    <div className={`option ${headerColour}`} to='/signin' onClick={context.logout}> SIGN OUT </div>
                    :
                    <div className={`option ${headerColour}`} onClick={() => setSignUpModal(!signUpModal)}>SIGN UP</div>
                }
            </div>
        </div>
        {signUpModal && <Register isHidden={signUpModal}/> }
        {loginModal && <Login isHidden={loginModal}/> }
        </div>
    )


}
export default Header;