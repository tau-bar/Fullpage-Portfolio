import React from 'react';
import { Icon  } from '@iconify/react';
import downloadStudy from '@iconify/icons-carbon/download-study';
import BaseButton from '../base-button/base-button.component';




const DownloadButton = () => {
    return (
      <BaseButton buttonType='download-button'>
        <Icon icon={downloadStudy} /> Portfolio
      </BaseButton>
      );
}

export default DownloadButton;