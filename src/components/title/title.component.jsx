import React from 'react';
import './title.styles.scss';

const Title = ({ children }) =>(
    <div>
        <h1 className='title-text'>{children}</h1>
    </div>
)

export default Title;