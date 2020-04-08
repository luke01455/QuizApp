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

    const closeLoginOpenSignUp = () => {
        context.registerModalToggle()

        if(context.loginModal) {
            context.loginModalToggle()
        }
        
    }

    const closeSignUpOpenLogin = () => {
        context.loginModalToggle()

        if (context.loginModal) {
            context.registerModalToggle()
        }

    }

    return (
        <div>
        <div className={`header ${transparency} ${headerColour}`}>
            <Link className={`logo-container ${headerColour}`} to='/'>
                <h1 className='header-logo'> SPORT BOUNTY </h1>
            </Link>
            <div className='options'>
                <Link className={`option ${headerColour}`} to='/contact'> CONTACT </Link>
                <Link className={`option ${headerColour}`} to='/faqs'> FAQ'S </Link>
                {context.user ?
                    <Link className={`option ${headerColour}`} to='/account'>{context.user.username.toUpperCase()}</Link>
                    :
                    <div className={`option ${headerColour}`} onClick={() => closeSignUpOpenLogin()}>SIGN IN</div>
                }
                {context.user ?
                    <div className={`option ${headerColour}`} to='/signin' onClick={context.logout}> SIGN OUT </div>
                    :
                    <div className={`option ${headerColour}`} onClick={() => closeLoginOpenSignUp()}>SIGN UP</div>
                }
            </div>
        </div>
        {context.registerModal && <Register /> }
        {context.loginModal && <Login /> }
        </div>
    )


}
export default Header;