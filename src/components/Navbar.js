import React from 'react';
import {Link,useAddress} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const address = useAddress();
    const isHome = address === '/';
    const isAbout = address === '/about';
    const isContact = address === '/contact';

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">Quiz 3</Link>
            <ul className="navbar-links">
                {links.map((link) => (
                    <li key={link.path} className="navbar-link">
                        <Link to={link.path} className={`navbar-link ${address === link.path ? 'active' : ''}`}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;

