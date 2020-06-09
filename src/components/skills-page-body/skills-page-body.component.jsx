import React from 'react';
import './skills-page-body.styles.scss';
import Title from '../title/title.component';
import Body from '../body/body.component'
import ProjectPreview from '../project-preview/project-preview.component';
import { PythonIcon,JavascriptIcon,DjangoIcon,ReactIcon,ReduxIcon,BootstrapIcon,SassIcon,HtmlIcon,CssIcon} from '../dev-icons/dev-icons.component'

import trident from '../../assets/trident.gif';
import tridentpic from '../../assets/trident.png';
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
            <ProjectPreview linkto='/trident' srcstatic={tridentpic} srcactive={trident}>
            Trident Digital Marketing<br/>    
                <div className='skill-container'>
                    <PythonIcon/>
                    <DjangoIcon/> 
                    <HtmlIcon/>
                    <CssIcon/>
                    <BootstrapIcon/>
                    <JavascriptIcon/>
                </div>
            </ProjectPreview>
            <ProjectPreview linkto='/zulibakes' srcstatic={zulibakespic} srcactive={zulibakes}>
            ZuliBakes Shop<br/>
            <div className='skill-container'>
                    <JavascriptIcon/>
                    <ReactIcon/>
                    <ReduxIcon/>
                    <SassIcon/>
                    <HtmlIcon/>
                    <CssIcon/>
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