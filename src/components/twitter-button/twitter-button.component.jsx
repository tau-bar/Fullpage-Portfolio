import React from 'react';
import './twitter-button.styles.scss'
import { Icon } from '@iconify/react';
import twitter from '@iconify/icons-cib/twitter';



const InstagramButton = ({ children }) => {
    return (
        <button className='twitter-button' href="https://github.com/tau-bar">
          <Icon icon={twitter} /> {children}
        </button>
      );
}

export default InstagramButton;