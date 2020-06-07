import React from 'react';
import './github-button.styles.scss'
import { Icon } from '@iconify/react';
import github from '@iconify/icons-cib/github';



const GitHubButton = ({ children }) => {
    return (
        <button className='github-button' href="https://github.com/tau-bar">
          <Icon icon={github} /> {children}
        </button>
      );
}

export default GitHubButton;