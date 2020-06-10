import React from 'react';

import ReactTooltip from 'react-tooltip';

import './dev-icons.styles.scss';

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


// add your own custom icons here!
export const PythonIcon = () => (
    <div>
    <Icon data-tip="Python" className='skill-icon' icon={pythonIcon} />

    </div>
)

export const ReduxIcon = () => (
    <div>
    <Icon data-tip="Redux" className='skill-icon' icon={reduxIcon} />
    </div>
)

export const ReactIcon = () => (
    <div>
    <Icon data-tip="React" className='skill-icon' icon={reactIcon} />
    </div>
)
export const JavascriptIcon = () => (
    <div>
    <Icon data-tip="JavaScript" className='skill-icon' icon={javascriptIcon} />
    </div>
)
export const DjangoIcon = () => (
    <div>
    <Icon data-tip="Django" className='skill-icon' icon={djangoIcon} />
    </div>
)
export const HtmlIcon = () => (
    <div>
    <Icon data-tip="HTML5" className='skill-icon' icon={html5Shield} style={{'color': '#e34c26'}}/>
    </div>
)
export const CssIcon = () => (
    <div>
    <Icon data-tip="CSS3" className='skill-icon' icon={css3Shiled} style={{'color': '#2965f1 '}}/>
    </div>
)
export const BootstrapIcon = () => (
    <div>
    <Icon data-tip="Bootstrap" className='skill-icon' icon={bootstrapIcon} />
    </div>
)
export const SassIcon = () => (
    <div>
    <Icon data-tip="Sass" className='skill-icon' icon={sassIcon} style={{'color': '#cc6699'}}/>
    <ReactTooltip place="bottom"/>
    </div>
)