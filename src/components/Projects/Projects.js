import React from 'react'

import { projectsData } from '../../data/projectsData'
import ProjectCard from './ProjectCard/ProjectCard'
import './Projects.css'

import Container from 'react-bootstrap/Container'


export default function Projects() {
    return (
        <Container fluid className='projects' id='projects'>
                <Container fluid className='projects--container'>
                    <Container fluid className='projects--header'>
                        <h1>Projects</h1>
                    </Container>
                    <Container fluid className='projects--body'>
                        <Container fluid className='projects--bodyContainer'>
                            {projectsData.map(project => (
                                <ProjectCard
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </Container>
                    </Container>
                </Container>
        </Container>
    )
};
