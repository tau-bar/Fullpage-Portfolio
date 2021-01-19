import React from 'react';
import './skills-page-body.styles.scss';
import Title from '../title/title.component';
import Body from '../body/body.component'
import ProjectPreview from '../project-preview/project-preview.component';
import { PythonIcon,JavascriptIcon,DjangoIcon,ReactIcon,ReduxIcon,BootstrapIcon,SassIcon,HtmlIcon,CssIcon,FirebaseIcon} from '../dev-icons/dev-icons.component'

import okaysports from '../../assets/okaysports.gif';
import okaysportspic from '../../assets/okaysports.png'
import zulibakes from '../../assets/zulibakes.gif';
import zulibakespic from '../../assets/zulibakes.png';



const SkillsPageBody = () => (
    <div className='skills-page-body'>
        <Title>
            My Skills and Projects <span role='img' aria-label='hello'>💻</span>
        </Title>
        <Body>
            Hover over any projects or icons!
        </Body>
        <div className='projects-container'>
            <ProjectPreview linkto='/okaysports' srcstatic={okaysportspic} srcactive={okaysports}>
            OkaySports<br/>    
                <div className='skill-container'>
                    <ReactIcon/>
                    <ReduxIcon/>
                    <HtmlIcon/>
                    <SassIcon/>
                    <JavascriptIcon/>
                    <FirebaseIcon/>
                </div>
            </ProjectPreview>
            <ProjectPreview linkto='/zulibakes' srcstatic={zulibakespic} srcactive={zulibakes}>
            ZuliBakes<br/>
            <div className='skill-container'>
                    <ReactIcon/>
                    <ReduxIcon/> 
                    <HtmlIcon/>
                    <SassIcon/>
                    <JavascriptIcon/>
                    <FirebaseIcon/>
                    </div>
            </ProjectPreview>
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