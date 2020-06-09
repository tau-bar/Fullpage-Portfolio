import React from 'react';
import './main-page.styles.scss';
import '../../components/title/title.component'
import MainPageBody from '../../components/main-page-body/main-page-body.component';
import LinksContainer from '../../components/links-container/links-container.component';

const MainPage = () => (
    <div className='main-page'>
            <MainPageBody/>
        <LinksContainer/>

    </div>
)

export default MainPage;