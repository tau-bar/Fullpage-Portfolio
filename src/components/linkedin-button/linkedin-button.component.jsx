import React from 'react';
import './linkedin-button.styles.scss'
import { Icon } from '@iconify/react';
import linkedin from '@iconify/icons-cib/linkedin';



const LinkedinButton = ({ children }) => {
    return (
        <button className='linkedin-button' href="https://github.com/tau-bar">
          <Icon icon={linkedin} /> {children}
        </button>
      );
}

export default LinkedinButton;