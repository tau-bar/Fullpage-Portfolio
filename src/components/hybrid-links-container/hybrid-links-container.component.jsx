import React from 'react';
import './hybrid-links-container.styles.scss';
import GitHubButton from '../github-button/github-button.component';
import LinkedinButton from '../linkedin-button/linkedin-button.component';
import InstagramButton from '../instagram-button/instagram-button.component';
import TwitterButton from '../twitter-button/twitter-button.component';
import { Link } from 'react-router-dom'

const HybridContainer = () => (
    <footer class='links-container'>
        <Link to ='/github'><GitHubButton></GitHubButton></Link>      
        <Link to ='/linkedin'><LinkedinButton></LinkedinButton></Link>
        <Link to = '/instagram'><InstagramButton></InstagramButton></Link>
        <Link to = '/twitter'><TwitterButton></TwitterButton></Link>
    </footer>
)

export default HybridContainer;