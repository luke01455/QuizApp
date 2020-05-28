import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth'

import MenuButton from '../menu-button/menu-button.component'

// import { useOnClickOutside } from '../../hooks/hooks';

import './menu-modal.styles.scss';

const MenuModal = ({}) => {

  const context = useContext(AuthContext)
  const node = useRef();
//   useOnClickOutside(node, () => turnSideMenuOff());

//   const startModalToggleMenu = () => {
//     toggleModalAccount();
//     toggleSideMenuHidden();
//   }
  const hidden = context.menuModal

  return (
    <div ref={node} className={`styled-menu ${hidden ? 'closed-menu' : 'open'}`}>
      <div className='modal-menu-button' onClick={() => context.menuModalToggle()}>
        <MenuButton></MenuButton>
      </div>
      <div className='menu-title-container'>
        <h1 className='menu-title'> Sport Bounty </h1>
      </div>
        <div className='a-container'>
          <Link className="menu-link" onClick={() => context.menuModalToggle()} to="/contact">
            CONTACT
        </Link>
            <Link className="menu-link" to="/account">ACCOUNT</Link>
          <Link className="menu-link" to="/faqs">
            FAQS
        </Link>
          <Link className="menu-link">
            SIGN IN
        </Link>
          <Link className="menu-link">
            SIGN UP
        </Link>
        </div>
      
    </div>
  )
}

export default MenuModal;