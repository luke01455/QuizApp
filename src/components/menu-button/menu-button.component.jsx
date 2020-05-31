import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth'
import './menu-button.styles.css';

const MenuButton = ({buttonColor}) => {
    const context = useContext(AuthContext)
    const hidden = context.menuModal
    return(
  <div 
//   onClick={modalMenu ? turnSideMenuOff : turnSideMenuOn} 
  className={`MenuButtonContainer ${!hidden ? 'is-active' : ''}`}>
    <button className={`hamburger hamburger--3dy ${!hidden ? 'is-active' : ''}`} type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  </div>
  )
}

export default MenuButton;