import RnD from '../assets/png/Logo_R&D_1024x1024.PNG';
import CodeCademy from '../assets/png/codecademy_logo.png';
import RPS from "../assets/png/rps.png";

export const projectsData = [
    {
        id: 1,
        projectName: "Raskeladden & Dovreslubben",
        projectDesc: "Android mobil spill utviklet i Godot. I utviklingsfasen hadde jeg rollene som Techlead, utvikler og tester",
        tags: ['Github', 'Godot', 'Asana'],
        code: "https://github.com/FunkWeb/spill6",
        demo: "https://funksoft.no/raskeladden/Raskeladden.og.Dovreslubben.html",
        image: RnD
    },
    {
        id: 2,
        projectName: "CodeCademy - Full-stack Engineer",
        projectDesc: "En sammling mindre prosjekter utført som en del av full-stack engineer læringsløpet.",
        tags: ['HTML', 'CSS', 'JavaScript'],
        code: "https://github.com/NorskViking/CodeCademy--Full-stack-Engineer--Course",
        demo: "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path",
        image: CodeCademy
    },
    {
        id: 3,
        projectName: "Portfolio Website",
        projectDesc: "En portefølje nettside utviklet i React. Publisert via Github-pages. Viser frem meg, mine erfaringer og prosjekter.",
        tags: ["React", "CSS", "Bootstrap", "Github"],
        code: "https://github.com/NorskViking/portfolio",
        demo: "https://norskviking.github.io/rock-paper-scissors-master/",
        image: CodeCademy
    },
    {
        id: 4,
        projectName: "Rock, Paper Scissor",
        projectDesc: "Et lite spillprosjekt hentet fra frontendmentor.io, hvor jeg har laget Stein, Saks, Papir. Prosjektet er laget med React-Typescript, med TailwindCSS for styling",
        tags: ["React", "TailwindCSS", "Typescript", "Github"],
        code: "https://github.com/NorskViking/rock-paper-scissors-master",
        demo: "https://norskviking.github.io/portfolio/projects/rps_game",
        image: RPS
    }
]