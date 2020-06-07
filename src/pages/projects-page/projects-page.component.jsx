import React from 'react';
import './projects-page.styles.scss';
import '../../components/title/title.component'
import ProjectsPageBody from '../../components/projects-page-body/projects-page-body.component';
import HybridContainer from '../../components/hybrid-links-container/hybrid-links-container.component'


const ProjectsPage = () => (
    <div class='main-page'>
        <ProjectsPageBody/>
        <HybridContainer/>
    </div>
)

export default ProjectsPage;