import React from 'react';
import { Icon } from '@iconify/react';
import linkedin from '@iconify/icons-cib/linkedin';
import BaseButton from '../base-button/base-button.component';



const LinkedinButton = () => {
    return (
        <BaseButton buttonType='linkedin-button'>
          <Icon icon={linkedin} />
        </BaseButton>
      );
}

export default LinkedinButton;