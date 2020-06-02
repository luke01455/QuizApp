import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth'

import MenuButton from '../menu-button/menu-button.component'

// import { useOnClickOutside } from '../../hooks/hooks';

import './menu-modal.styles.scss';

const MenuModal = ({ }) => {

  const context = useContext(AuthContext)
  const node = useRef();
  //   useOnClickOutside(node, () => turnSideMenuOff());

  //   const startModalToggleMenu = () => {
  //     toggleModalAccount();
  //     toggleSideMenuHidden();
  //   }
  const hidden = context.menuModal

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
    <div ref={node} className={`styled-menu ${hidden ? 'closed-menu' : 'open'}`}>
      <div className='modal-menu-button' onClick={() => context.menuModalToggle()}>
        <MenuButton />
      </div>
      <div className='menu-title-container'>
        <h1 className='menu-title'> SPORT BOUNTY </h1>
      </div>
      <div className='a-container'>
        <Link className="menu-link" onClick={() => context.menuModalToggle()} to="/contact">
          CONTACT
        </Link>
        <Link className="menu-link" onClick={() => context.menuModalToggle()} to="/account">
          ACCOUNT
        </Link>
        <Link className="menu-link" onClick={() => context.menuModalToggle()} to="/faqs">
          FAQS
        </Link>
        {context.user ?
                    <Link className={`menu-link`} to='/account'>{context.user.username.toUpperCase()}</Link>
                    :
                    <div className={`menu-link`} onClick={() => closeSignUpOpenLogin()}>SIGN IN</div>
                }
                {context.user ?
                    <div className={`menu-link`} to='/signin' onClick={context.logout}> SIGN OUT </div>
                    :
                    <div className={`menu-link`} onClick={() => closeLoginOpenSignUp()}>SIGN UP</div>
                }
      </div>

    </div>
  )
}

export default MenuModal;