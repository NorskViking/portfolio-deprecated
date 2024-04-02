import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/footer">Footer</Link>
        </div>  
    )
}
export default Navbar;

/*
    <Link to="/About">About</Link>
    <Link to="/Projects">Projects</Link>
    <Link to="/Skills">Skills</Link>
    <Link to="/Experience">Experience</Link>
    <Link to="/Testimonials">Testimonials</Link>
    <Link to="/Footer">Footer</Link>
*/