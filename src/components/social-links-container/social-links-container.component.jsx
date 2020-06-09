import React from 'react';
import '../links-container/links-container.styles.scss';
import InstagramButton from '../instagram-button/instagram-button.component';
import TwitterButton from '../twitter-button/twitter-button.component';
import { Link } from 'react-router-dom'

const SocialLinks = () => (
    <footer className='links-container'>
        <Link to ='/instagram'><InstagramButton></InstagramButton></Link>
        <Link to ='/twitter'><TwitterButton></TwitterButton></Link>      
      
    </footer>
)

export default SocialLinks; 