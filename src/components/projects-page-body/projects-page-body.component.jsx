import React from 'react';
import './projects-page-body.styles.scss';
import Title from '../title/title.component';
import Body from '../body/body.component';


const ProjectsPageBody = () => (
    <div className='projects-page-body'>
        <Title>Contact Me <span role='img' aria-label='rocket'>🚀</span></Title>
        <Body>
            For collaborations or any other developer related enquiries, feel free to contact me through any of these channels!
        </Body>


    </div>    
)

export default ProjectsPageBody;