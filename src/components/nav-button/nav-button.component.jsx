import React from 'react';
import './nav-button.styles.scss';


const NavButton = ({ onClick, children }) => (
          <button onClick={onClick} className='page-button'>
            {children}
          </button>
)

export default NavButton;