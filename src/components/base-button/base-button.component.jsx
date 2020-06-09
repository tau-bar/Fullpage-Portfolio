import React from 'react';
import './base-button.styles.scss';

const BaseButton = ({ children, buttonType }) => {
    return (
        <button className={`base-button ${buttonType}`}>
          {children}
        </button>
      );
}

export default BaseButton;