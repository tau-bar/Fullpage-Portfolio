import React from 'react';
import { Icon } from '@iconify/react';
import instagram from '@iconify/icons-cib/instagram';
import BaseButton from '../base-button/base-button.component';



const InstagramButton = () => {
    return (
        <BaseButton buttonType='instagram-button'>
          <Icon icon={instagram}/>
        </BaseButton>
      );
}

export default InstagramButton;