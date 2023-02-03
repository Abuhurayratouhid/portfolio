import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Projects from './Projects';
import SendEmail from './SendEmail';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <SendEmail></SendEmail>
            <Footer></Footer>
        </div>
    );
};

export default Home;