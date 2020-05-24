import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth'

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
      <div className='modal-menu-button'>
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