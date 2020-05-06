import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { AuthContext } from '../../context/auth'
import { withRouter } from 'react-router-dom'
import Register from '../../pages/register/register'
import Login from '../../pages/login/login'

import burgerIcon from '../../assets/icons/PinClipart.com_hamburger-clip-art-black_1751649.png'


import './header.styles.scss';

const Header = ({ transparency, scrollLocation, history }) => {
    const context = useContext(AuthContext)

    const [headerColour, setHeaderColour] = useState('white')

    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);


    // useEffect(() => history.listen(() => {
    //     let mounted = true;

    //     if(mounted) {
    //         setShouldShowActions(false)
    //         setLastYPos(0)
    //         scrollLocation = 0
    //         console.log(shouldShowActions)
    //         console.log(lastYPos)
    //     } else {
    //         console.log('not mounted')
    //     }

    //     return () => mounted = false;

    // }), [])

    
    useEffect(() => {

        // checks to see if url contains sport, if it does sets show header constantly to true, which in turn sets the animation to never go to 0, pretty hacky and shit
        if (document.URL.indexOf("Sport") > -1) { setShowHeaderConstantly(true) }
    }, [history.location.key])
  

    useEffect(() => {
        // if(window.location.pathname.length == 1 || window.location.pathname.length == 0 || window.location.pathname === "/index.html" || window.location.pathname === "/index"){

        // }

        if (scrollLocation > vh - 50) {
            setHeaderColour('black')
        } else {
            setHeaderColour('white')
        }

    }, [scrollLocation])

    const [lastYPos, setLastYPos] = React.useState(0);
    const [shouldShowActions, setShouldShowActions] = React.useState(true);
    const [showingHeaderConstantly, setShowHeaderConstantly] = React.useState(false);
  
    React.useEffect(() => {
        function handleScroll() {
            const yPos = window.scrollY;
            const isScrollingUp = yPos < lastYPos;
      
            setShouldShowActions(isScrollingUp);
            setLastYPos(yPos)
          }
      
          window.addEventListener("scroll", handleScroll, false);
      
          return () => {
            window.removeEventListener("scroll", handleScroll, false);
          };
    }, [lastYPos]);
    

    const closeSignUpOpenLogin = () => {
        context.loginModalToggle()

        if (context.registerModal) {
            context.registerModalToggle()
        }

    }

    const closeLoginOpenSignUp = () => {
        context.registerModalToggle()

        if(context.loginModal) {
            context.loginModalToggle()
        }
        
    }

    
    return (
        <div>
        <motion.div 
        className={`header ${transparency} ${headerColour}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: showingHeaderConstantly ? 1 : shouldShowActions ? 1 : 0 }}
        transition={{ opacity: { duration: 1} }}
        >
            <Link className={`logo-container ${headerColour}`} to='/'>
                <h1 className={`header-logo ${transparency}`}> SPORT BOUNTY </h1>
            </Link>
            <div className={`options ${transparency}`}>
                <Link className={`option ${headerColour} ${transparency}`} to='/contact'> CONTACT </Link>
                <Link className={`option ${headerColour} ${transparency}`} to='/faqs'> FAQ'S </Link>
                {context.user ?
                    <Link className={`option ${headerColour} ${transparency}`} to='/account'>{context.user.username.toUpperCase()}</Link>
                    :
                    <div className={`option ${headerColour} ${transparency}`} onClick={() => closeSignUpOpenLogin()}>SIGN IN</div>
                }
                {context.user ?
                    <div className={`option ${transparency} ${headerColour}`} to='/signin' onClick={context.logout}> SIGN OUT </div>
                    :
                    <div className={`option ${headerColour} ${transparency}`} onClick={() => closeLoginOpenSignUp()}>SIGN UP</div>
                }
            </div>
            <div className='burger-icon-container'> <img className='burger-icon-img' src={burgerIcon}></img></div>
        </motion.div>
        {context.registerModal && <Register /> }
        {context.loginModal && <Login /> }
        </div>
    )


}
export default withRouter(Header);