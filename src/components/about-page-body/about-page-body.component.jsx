import React from 'react';
import './about-page-body.scss';
import Title from '../title/title.component';
import Body from '../body/body.component'

const AboutPageBody = () => (
    <div className='about-page-body'>
        <Title>About Me <span role='img' aria-label='man'>👨🏾‍💻</span></Title>
        <Body>Passionate about Web Development and continuously looking for opportunities to learn. Currently in NUS Computer Science.</Body>
    </div>
)

export default AboutPageBody;