import React from 'react'
import Card from 'react-bootstrap/Card'

import './ProjectCard.css'

import { ReactComponent as PlayBtn } from '../../../assets/svg/play-circle.svg'
import { ReactComponent as CodeBtn } from '../../../assets/svg/code-slash.svg'

export default function ProjectCard({ id, name, desc, tags, code, demo, image }) {
    return (
        <Card key={id} className='projectCard'>
            <Card.Body className='projectCard--body'>
                <Card.Title className='projectCard--header'>
                    {name}
                </Card.Title>
                <Card.Img src={image} alt="" className='projectCard--img'/>
                <div className='projectCard--desc'>
                    <span>{desc}</span>
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
                            alt='play button with weblink to project demo site.'
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
                            alt='code button with weblink to project github page.'
                        />
                    </a>
                </div>
            </Card.Body>
        </Card>
    )
}