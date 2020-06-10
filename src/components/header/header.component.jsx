import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { AuthContext } from '../../context/auth'
import { withRouter } from 'react-router-dom'
import Register from '../../pages/register/register'
import Login from '../../pages/login/login'

import MenuButton from '../menu-button/menu-button.component'
import MenuButton2 from '../menu-button/menu-button2.component'


import './header.styles.scss';

const Header = ({ transparency, scrollLocation, history, color }) => {

    const context = useContext(AuthContext)

    const [headerColour, setHeaderColour] = useState('white')

    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    const isRoot = window.location.pathname == "/";

    console.log(isRoot)
    
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
        className={`header ${transparency} ${headerColour} ${color}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: showingHeaderConstantly ? 1 : shouldShowActions ? 1 : 0 }}
        transition={{ opacity: { duration: 1} }}
        >
            <Link className={`logo-container ${headerColour}`} to='/'>
                <h1 className={`header-logo ${transparency} ${color}`}> SPORT BOUNTY </h1>
            </Link>
            <div className={`options ${transparency}`}>
                <Link className={`option ${headerColour} ${transparency} ${color}`} to='/shop'> SHOP </Link>
                <Link className={`option ${headerColour} ${transparency} ${color}`} to='/contact'> CONTACT </Link>
                <Link className={`option ${headerColour} ${transparency} ${color}`} to='/faqs'> FAQ'S </Link>
                {context.user ?
                    <Link className={`option ${headerColour} ${transparency} ${color}`} to='/account'>{context.user.username.toUpperCase()}</Link>
                    :
                    <div className={`option ${headerColour} ${transparency} ${color}`} onClick={() => closeSignUpOpenLogin()}>SIGN IN</div>
                }
                {context.user && <div className={`option ${headerColour} ${transparency} ${color}`} to='/shop'>{context.user.coins}</div>
                }
                {context.user ?
                    <div className={`option ${transparency} ${headerColour} ${color}`} to='/signin' onClick={context.logout}> SIGN OUT </div>
                    :
                    <div className={`option ${headerColour} ${transparency} ${color}`} onClick={() => closeLoginOpenSignUp()}>SIGN UP</div>
                }
            </div>
            <div className='burger-icon-container' onClick={() => context.menuModalToggle()}> { isRoot ? <MenuButton /> : <MenuButton2 />} </div>
        </motion.div>
        {context.registerModal && <Register /> }
        {context.loginModal && <Login /> }
        </div>
    )


}
export default withRouter(Header);