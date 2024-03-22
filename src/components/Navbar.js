import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Skills">Skills</Link>
            <Link to="/Experience">Experience</Link>
            <Link to="/Testimonials">Testimonials</Link>
            <Link to="/Footer">Footer</Link>
        </div>
    )
}