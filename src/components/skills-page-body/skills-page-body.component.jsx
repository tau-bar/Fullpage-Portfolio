import React from 'react';
import './skills-page-body.styles.scss';
import Title from '../title/title.component';
import Body from '../body/body.component'
import ProjectPreview from '../project-preview/project-preview.component';

import ReactTooltip from 'react-tooltip';

import { Icon } from '@iconify/react';
import reduxIcon from '@iconify/icons-logos/redux';
import reactIcon from '@iconify/icons-logos/react';
import javascriptIcon from '@iconify/icons-logos/javascript';
import pythonIcon from '@iconify/icons-logos/python';
import djangoIcon from '@iconify/icons-logos/django';
import html5Shield from '@iconify/icons-cib/html5-shield';
import css3Shiled from '@iconify/icons-cib/css3-shiled';
import sassIcon from '@iconify/icons-cib/sass';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';

import trident from '../../assets/trident.gif';
import tridentpic from '../../assets/trident.png';
import zulibakes from '../../assets/zulibakes.gif';
import zulibakespic from '../../assets/zulibakes.png';






const SkillsPageBody = () => (
    <div class='skills-page-body'>
        <Title>
            My Skills and Projects <span role='img' aria-label='hello'>💻</span>
        </Title>
        <Body>
            Hover over any projects or icons!
        </Body>
        <div className='projects-container'>
            <ProjectPreview linkto='/trident' srcstatic={tridentpic} srcactive={trident}>
            Trident Digital Marketing<br/>    
            <Icon data-tip="Python" className='skill-icon' icon={pythonIcon} />
            <Icon data-tip="Django" class='skill-icon' icon={djangoIcon} /> 
            <Icon data-tip='HTML5' class='skill-icon' icon={html5Shield} style={{'color': '#e34c26'}}/> 
            <Icon data-tip='CSS3' class='skill-icon' icon={css3Shiled} style={{'color': '#2965f1 '}}/> 
            <Icon data-tip='Bootstrap 4' class='skill-icon' icon={bootstrapIcon}/> 
            <Icon data-tip='Javascript' class='skill-icon' icon={javascriptIcon} />
            
            </ProjectPreview>
            <ProjectPreview linkto='/zulibakes' srcstatic={zulibakespic} srcactive={zulibakes}>
            ZuliBakes Shop<br/>
            <Icon data-tip='Javascript' class='skill-icon' icon={javascriptIcon} /> 
            <Icon data-tip='React' class='skill-icon' icon={reactIcon}/> 
            <Icon data-tip='Redux' class='skill-icon' icon={reduxIcon}/> 
            <Icon data-tip='Sass' class='skill-icon' icon={sassIcon} style={{'color': '#cc6699'}}/> 
            <Icon data-tip='HTML5' class='skill-icon' icon={html5Shield} style={{'color': '#e34c26'}}/> 
            <Icon data-tip='CSS3' class='skill-icon' icon={css3Shiled} style={{'color': '#2965f1 '}}/>
            </ProjectPreview>
            <ReactTooltip />
        </div>



    </div>
)

export default SkillsPageBody;


    // <ul className='skills-list'>
        //     <li>
        //         React <Icon icon={reactIcon}/>
        //     </li>
        //     <li>
        //         Redux <Icon icon={reduxIcon}/>
        //     </li>
        //     <li>
        //         JavaScript <Icon icon={javascriptIcon} />
        //     </li>
        //     <li>
        //         Python <Icon icon={pythonIcon} />
        //     </li>
        //     <li>
        //         Django <Icon icon={djangoIcon} />
        //     </li>
        // </ul>