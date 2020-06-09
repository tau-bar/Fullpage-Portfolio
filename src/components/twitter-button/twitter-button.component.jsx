import React from 'react';
import { Icon } from '@iconify/react';
import twitter from '@iconify/icons-cib/twitter';
import BaseButton from '../base-button/base-button.component';



const InstagramButton = ({ children }) => {
    return (
        <BaseButton buttonType='twitter-button'>
          <Icon icon={twitter} />
        </BaseButton>
      );
}

export default InstagramButton;