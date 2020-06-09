import React from 'react';
import './project-preview.styles.scss'
import { Link } from 'react-router-dom';

const ProjectPreview = ({ children, srcstatic, srcactive,linkto }) => (
    <div className='project-preview'>
    <Link to={`${linkto}`}>
        <img className='static' src={`${srcstatic}`} alt='project-preview' ></img>
        <img className='active' src={`${srcactive}`} alt='project-preview' ></img>
    </Link>
        <span>{children}</span>
    </div>
)

export default ProjectPreview;