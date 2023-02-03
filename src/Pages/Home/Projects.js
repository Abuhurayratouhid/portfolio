import React from 'react';
import bookHut from '../../Assets/book.png';
import eduCamb from '../../Assets/EduCamb-real.png';
import fruits from '../../Assets/fruitsandfood.png';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
            name:'Book-HUT',
            img: bookHut,
            url: 'https://product-resale.web.app/'
        },
        {
            name:'EduCamb',
            img: eduCamb,
            url: 'https://educamb-f89f2.web.app/'
        },
        {
            name:'FruitsPlanet',
            img: fruits,
            url:'https://fruits-and-food.web.app/'
        },
    ]
    return (
        <div id='projects' style={{height: '',backgroundColor: '#1c1c1c', color:'white'}}>
            <h1 className='text-5xl font-bold text-center py-10'>Projects</h1>
            <div className='lg:flex justify-around pb-10'>
                {
                    projects.map((project,i) => <ProjectCard
                    key={i}
                    project={project}
                    >
                    </ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;