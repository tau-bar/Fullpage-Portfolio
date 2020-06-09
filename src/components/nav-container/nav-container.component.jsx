import React from 'react';
import './nav-container.styles.scss';
import NavButton from '../nav-button/nav-button.component';


const NavContainer = ({ fullpageApi }) => (
    <header class='nav-container'>
    <NavButton onClick={() => fullpageApi.moveTo(1, 0)}>
    <span class="full-text">Main </span>
        <span class="short-text"><span role='img' aria-label='hello'>👋</span></span>
    </NavButton>
    <NavButton onClick={() => fullpageApi.moveTo(2, 0)}>
        <span class="full-text">About Me </span>
        <span class="short-text"><span role='img' aria-label='me'>👨🏾‍💻</span></span>
    </NavButton>
    <NavButton onClick={() => fullpageApi.moveTo(3, 0)}>
        <span class="full-text">Projects </span>
        <span class="short-text"><span role='img' aria-label='computer'>💻</span></span>
    </NavButton>
    <NavButton onClick={() => fullpageApi.moveTo(4, 0)}>
        <span class="full-text">Contact Me </span>
        <span class="short-text"><span role='img' aria-label='rocket'>🚀</span></span>   
    </NavButton>
  </header>
)

export default NavContainer;