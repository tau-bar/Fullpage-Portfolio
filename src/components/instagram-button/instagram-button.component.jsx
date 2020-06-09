import React from 'react';
import './instagram-button.styles.scss'
import { Icon } from '@iconify/react';
import instagram from '@iconify/icons-cib/instagram';



const InstagramButton = ({ children }) => {
    return (
        <button className='instagram-button'>
          <Icon icon={instagram} /> {children}
        </button>
      );
}

export default InstagramButton;