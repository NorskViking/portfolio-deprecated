import './About.css'
import about_img from '../../assets/svg/code-slash.svg'
import github from '../../assets/svg/github.svg'
import linkedin from '../../assets/svg/linkedin.svg'
import Container from 'react-bootstrap/Container'
import { aboutData } from '../../data/aboutData'
import { socialsData } from '../../data/socialsData'

export default function About() {
    return (
        <Container>
            <div className="about" id="about">
                <div className="about--container">
                    <div className="about--container-left">
                        <div className='about--content'>

                        </div>
                    </div>
                    <img 
                        src={about_img}
                        alt=""
                        className='about--img'
                    />
                    <div className="about--container-right">
                        <div className='about--content-info'>
                            <h6>{aboutData.title}</h6>
                            <h1>{aboutData.name}</h1>
                            <p>{aboutData.description}</p>
                        </div>
                        <div className='about--content-social'>
                            {socialsData.linkedin && (
                                <a
                                    href={socialsData.linkedin}
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    <img
                                        src={linkedin}
                                        alt="" 
                                    />
                                </a>
                            )}
                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    <img
                                        src={github}
                                        alt="" 
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}