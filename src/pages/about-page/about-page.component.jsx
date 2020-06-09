import React from 'react';
import './about-page.styles.scss';
import AboutPageBody from '../../components/about-page-body/about-page-body.component';
import SocialLinks from '../../components/social-links-container/social-links-container.component'

const AboutPage = () => (
    <div className='about-page'>
       <AboutPageBody/>
       <SocialLinks/>
    </div>
)

export default AboutPage;