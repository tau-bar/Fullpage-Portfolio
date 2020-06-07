import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import MainPage from '../../pages/main-page/main-page.component';
import AboutPage from '../../pages/about-page/about-page.component';
import SkillsPage from '../../pages/skills-page/skills-page.component';
import ProjectsPage from '../../pages/projects-page/projects-page.component';
import './full-page.styles.scss'



const anchors = ["Hello", "About", "Projects", "Contact"];


const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    anchors={anchors}
    navigation
    navigationTooltips={anchors}


    render={({ state, fullpageApi }) => {
      return (
        <div>
        <ReactFullpage.Wrapper>
          <div className="section">
          <header class='nav-container'>
          <button onClick={() => fullpageApi.moveTo(2, 0)} className='page-button'>
              <span class="full-text">About Me </span>
              <span class="short-text"><span role='img' aria-label='hello'>👨🏾‍💻</span></span>
          </button>
          <button onClick={() => fullpageApi.moveTo(3, 0)} className='page-button'>
              <span class="full-text">Projects </span>
              <span class="short-text"><span role='img' aria-label='hello'>💻</span></span>
          </button>
          <button onClick={() => fullpageApi.moveTo(4, 0)} className='page-button'>
              <span class="full-text">Contact Me </span>
              <span class="short-text"><span role='img' aria-label='hello'>🚀</span></span>   
          </button>
        </header>
            <MainPage />
          </div>
          <div className="section">
          <header class='nav-container'>
          <button onClick={() => fullpageApi.moveTo(1, 0)} className='page-button'>
          <span class="full-text">Main </span>
              <span class="short-text"><span role='img' aria-label='hello'>👋</span></span>
          </button>
          <button onClick={() => fullpageApi.moveTo(3, 0)} className='page-button'>
              <span class="full-text">Projects </span>
              <span class="short-text"><span role='img' aria-label='hello'>💻</span></span>
          </button>
          <button onClick={() => fullpageApi.moveTo(4, 0)} className='page-button'>
              <span class="full-text">Contact Me </span>
              <span class="short-text"><span role='img' aria-label='hello'>🚀</span></span>   
          </button>
        </header>
            <AboutPage/>
          </div>
          <div className="section">
          <header class='nav-container'>
          <button onClick={() => fullpageApi.moveTo(1, 0)} className='page-button'>
          <span class="full-text">Main </span>
              <span class="short-text"><span role='img' aria-label='hello'>👋</span></span>
          </button>
          <button onClick={() => fullpageApi.moveTo(2, 0)} className='page-button'>
              <span class="full-text">About Me </span>
              <span class="short-text"><span role='img' aria-label='hello'>👨🏾‍💻</span></span>
          </button>
          <button onClick={() => fullpageApi.moveTo(4, 0)} className='page-button'>
              <span class="full-text">Contact Me </span>
              <span class="short-text"><span role='img' aria-label='hello'>🚀</span></span>   
          </button>
        </header>  
          <SkillsPage/>
          </div>
          <div className="section">
          <header class='nav-container'>
          <button onClick={() => fullpageApi.moveTo(1, 0)} className='page-button'>
          <span class="full-text">Main </span>
              <span class="short-text"><span role='img' aria-label='hello'>👋</span></span>
          </button>
          <button onClick={() => fullpageApi.moveTo(2, 0)} className='page-button'>
              <span class="full-text">About Me </span>
              <span class="short-text"><span role='img' aria-label='hello'>👨🏾‍💻</span></span>
          </button>
          <button onClick={() => fullpageApi.moveTo(3, 0)} className='page-button'>
              <span class="full-text">Projects </span>
              <span class="short-text"><span role='img' aria-label='hello'>💻</span></span>
          </button>
        </header>
            <ProjectsPage/>
          </div>

        </ReactFullpage.Wrapper>
        </div>
      );
    }}
  />
);



export default Fullpage;