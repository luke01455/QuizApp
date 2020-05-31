import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth'
import './menu-button2.styles.css';

const MenuButton2 = () => {
    const context = useContext(AuthContext)
    const hidden = context.menuModal
    return(
  <div 
//   onClick={modalMenu ? turnSideMenuOff : turnSideMenuOn} 
  className={`MenuButtonContainer2 ${!hidden ? 'is-active2' : ''}`}>
    <button className={`hamburger2 hamburger--3dy2 ${!hidden ? 'is-active2' : ''}`} type="button">
      <span className="hamburger-box2">
        <span className={`hamburger-inner2`}></span>
      </span>
    </button>
  </div>
  )
}

export default MenuButton2;