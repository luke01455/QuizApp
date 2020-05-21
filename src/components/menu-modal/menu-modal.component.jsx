import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import MenuButton from '../menu-button/menu-button-component';

// import { useOnClickOutside } from '../../hooks/hooks';

import './menu-modal.styles.scss';

const MenuModal = () => {

//   const node = useRef();
//   useOnClickOutside(node, () => turnSideMenuOff());

//   const startModalToggleMenu = () => {
//     toggleModalAccount();
//     toggleSideMenuHidden();
//   }

  return (
    <div ref={node} className={`styled-menu ${hidden ? 'closed' : ''}`}>
      <div className='modal-menu-button'>
      <MenuButton modalMenu={true} />
      </div>
        <div className='a-container'>
          <Link className="menu-link" onClick={} to="/contact">
            CONTACT
        </Link>
          {currentUser ?
            <Link className="menu-link" onClick={} to="/account">ACCOUNT</Link> :
            <div onClick={startModalToggleMenu} className="menu-link"> ACCOUNT </div>
          }
          <Link className="menu-link" onClick={} to="/faqs">
            FAQS
        </Link>
          <Link className="menu-link" onClick={}>
            SIGN IN
        </Link>
          <Link className="menu-link" onClick={}>
            SIGN UP
        </Link>
        </div>
      
    </div>
  )
}

export default MenuModal;