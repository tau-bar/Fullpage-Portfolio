import React from 'react';
import './about-page-body.scss';
import Title from '../title/title.component';
import Body from '../body/body.component'

const AboutPageBody = () => (
    <div className='about-page-body'>
        <Title>About Me <span role='img' aria-label='man'>👨🏾‍💻</span></Title>
        <Body>A young web developer passionate on learning how to make beautiful websites. Coding since Feb 2020. NUS Computer Science 2020.</Body>
    </div>
)

export default AboutPageBody;