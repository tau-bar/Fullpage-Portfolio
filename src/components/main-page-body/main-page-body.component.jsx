import React from 'react';
import './main-page-body.styles.scss';
import Title from '../title/title.component';
import Body from '../body/body.component';


const MainPageBody = () => (
    <div class='main-page-body'>
    <Title>
        Hi there, I'm Taufiq!<span role='img' aria-label='hello'>👋</span>
    </Title>
    <Body>
        Scroll down, or click any of the buttons!
    </Body>
    </div>
)

export default MainPageBody;