import './Skills.css'

import { skillsData } from "../../data/skillsData"
import SkillCard from "./SkillsCard"

import Container from 'react-bootstrap/Container'
import Marquee from 'react-fast-marquee'

export default function Skills() {
    return (
        <Container fluid className='skills' id='skills'>
            <Container fluid className='skillsHeader'>
                <h2>Skills</h2>
            </Container>
            <Container fluid className='skillsContainer'>
                <Container fluid className='skill--scroll'>
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill) => (
                            <SkillCard
                                key={skill.id}
                                id={skill.id}
                                logo={skill.logo}
                            />
                        ))}
                    </Marquee>
                </Container>
            </Container>
        </Container>
    )
}
