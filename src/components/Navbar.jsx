import { useState } from "react";

function Navbar()
{
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => { 
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuClose(false);
    };
    return(
        <nav className = "navbar">

            {/* Logo / Name */}

            <div className = "Navbar-logo">
                <a href = "#home" onClick = {closeMenu}>
                    SB
                </a>
            </div>

            {/*Desktop Navigation */}

            <div className = "navbar-links">

                <a href = "#home">Home</a>

                <a href = "#about">About</a>

                <a href = "#skills">Skills</a>

                <a href = "#projects">Projects</a>

                <a href = "#experience">Experience</a>

                <a href = "#education">Education</a>

                <a href = "#contact">Contact</a>

            </div>

            {/*Mobile Menu Button */}

            <button 
            className = "menu-button" 
            onClick = {toggleMenu} 
            aria-lebel = "Toggle navigation Menu">
                ☰
            </button>

            {/*Mobile Navigation */}

            {menuOpen && (

                <div className = "mobile-menu">

                    <a href = "#home" onClick = {closeMenu}>
                        Home
                    </a>

                    <a href = "#about" onClick = {closeMenu}>
                        About
                    </a>

                    <a href = "#projects" onClick = {closeMenu}>
                        Projects
                    </a>

                    <a href = "#experiments" onClick = {closeMenu}>
                        Experiments
                    </a>

                    <a href = "#education" onClick = {closeMenu}>
                        Education
                    </a>

                    <a href = "#contact" onClick = {closeMenu}>
                        Contact
                    </a>

                </div>
            )}

        </nav>
    );
}

export default Navbar;