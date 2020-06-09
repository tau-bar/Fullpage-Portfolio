import React from 'react';
import { Icon } from '@iconify/react';
import github from '@iconify/icons-cib/github';
import BaseButton from '../base-button/base-button.component';



const GitHubButton = () => {
    return (
        <BaseButton buttonType='github-button'>
          <Icon icon={github} />
        </BaseButton>
      );
}

export default GitHubButton;