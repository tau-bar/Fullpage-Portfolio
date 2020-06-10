import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import MainPage from '../../pages/main-page/main-page.component';
import AboutPage from '../../pages/about-page/about-page.component';
import SkillsPage from '../../pages/skills-page/skills-page.component';
import ProjectsPage from '../../pages/projects-page/projects-page.component';
import NavContainer from '../nav-container/nav-container.component';



const anchors = ["Hello", "About", "Projects", "Contact"];


const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {800} /* Options here */
    anchors={anchors}
    navigation
    navigationTooltips={anchors}


    // add more pages here
    render={({ fullpageApi }) => {
      return (
        <div>
        <ReactFullpage.Wrapper>
          <div className="section">
          <NavContainer fullpageApi={fullpageApi}>
          </NavContainer>
            <MainPage />
          </div>
          <div className="section">
          <NavContainer fullpageApi={fullpageApi}>
          </NavContainer>
            <AboutPage/>
          </div>
          <div className="section">
          <NavContainer fullpageApi={fullpageApi}>
          </NavContainer>
            <SkillsPage/>
          </div>
          <div className="section">
          <NavContainer fullpageApi={fullpageApi}>
          </NavContainer>
            <ProjectsPage/>
          </div>

        </ReactFullpage.Wrapper>
        </div>
      );
    }}
  />
);



export default Fullpage;