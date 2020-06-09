import React from 'react';
import './links-container.styles.scss';
import GitHubButton from '../github-button/github-button.component';
import LinkedinButton from '../linkedin-button/linkedin-button.component';
import DownloadButton from '../download-button/download-button.component';
import { Link } from 'react-router-dom'

const LinksContainer = () => (
    <footer className='links-container'>
        <Link to ='/github'><GitHubButton></GitHubButton></Link>      
        <Link to ='/portfolio'><DownloadButton>Portfolio</DownloadButton></Link>
        <Link to = '/linkedin'><LinkedinButton></LinkedinButton></Link>
    </footer>
)

export default LinksContainer;