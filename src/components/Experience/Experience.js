import './Experience.css'
import { experienceData } from "../../data/experienceData";
import experienceImg from "../../assets/jpg/experience_img.jpg"

import ExperienceCard from "./ExperienceCard";

import Container from "react-bootstrap/Container";

export default function Experience() {
    return (
        <Container fluid className="experience" id="experience">
            <Container fluid className='experience--header'>
                <h1>Arbeidserfaring</h1>
            </Container>
            <Container fluid className="experience--body">
                <Container fluid className="experience-img">
                    <img src={experienceImg} alt="" />
                </Container>
                <Container fluid className="experience--description">
                    {experienceData.map(experience => (
                            <ExperienceCard
                                key={experience.id}
                                id={experience.id}
                                logo={experience.logo}
                                company={experience.company}
                                website={experience.website}
                                jobtitle={experience.jobtitle}
                                startYear={experience.startYear}
                                endYear={experience.endYear}
                            />
                        ))}
                </Container>
            </Container>
        </Container>
    )
}