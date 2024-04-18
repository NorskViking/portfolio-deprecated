import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/container'

import './ProjectCard.css'

import { ReactComponent as PlayBtn } from '../../../assets/svg/play-circle.svg'
import { ReactComponent as CodeBtn } from '../../../assets/svg/code-slash.svg'

export default function ProjectCard({ id, name, desc, tags, code, demo, image }) {
    return (
        <Container fluid key={id}>
            <Card className='project--card'>
                <Card.Body>
                    <Card.Title>
                        {name}
                    </Card.Title>
                    <Card.Img src={image} alt="" />
                    <div className='project--desc'>
                        {desc}
                    </div>
                    <div className='project--tags'>
                        {tags.map((tag, id) => (
                            <span key={id}>{tag}</span>
                        ))}
                    </div>
                    <div className='project--btn'>
                        <a
                            href={demo}
                            target='_blank'
                            rel='noreferrer'
                            className='demo-btn'
                        >
                            <PlayBtn
                                id='demo-icon-btn'
                                className='iconBtn'
                                aria-label='Demo'
                                alt=""
                            />
                        </a>
                        <a
                            href={code}
                            target='_blank'
                            rel='noreferrer'
                            className='code-btn'
                        >
                            <CodeBtn
                                id='code-icon-btn'
                                className='iconBtn'
                                aria-label='Code'
                                alt=""
                            />
                        </a>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}