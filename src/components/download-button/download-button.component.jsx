import React from 'react';
import './download-button.styles.scss'
import { Icon,  } from '@iconify/react';
import downloadStudy from '@iconify/icons-carbon/download-study';




const DownloadButton = ({ children }) => {
    return (
      <button className='download-button' href="https://github.com/tau-bar">
        <Icon icon={downloadStudy} /> {children}
      </button>
      );
}

export default DownloadButton;