function Footer()
{
    return(
        <footer className="footer">

            <div className="footer-content">

                {/* Footer Introduction */}
                <div className="footer-about">

                    <h3>Sounak Banerjee</h3>

                    <p>
                        Computer Engineering student passionate about
                        software development, problem solving, and
                        building practical applications.
                    </p>

                </div>


                {/* Footer Navigation */}
                <div className="footer-navigation">

                    <h3>Navigation</h3>

                    <a href="#home">Home</a>

                    <a href="#about">About</a>

                    <a href="#skills">Skills</a>

                    <a href="#projects">Projects</a>

                    <a href="#experience">Experience</a>

                    <a href="#education">Education</a>

                    <a href="#contact">Contact</a>

                </div>


                {/* Footer Social Links */}
                <div className="footer-social">

                    <h3>Connect</h3>

                    <a
                        href="https://github.com/28-Sounak"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="YOUR_LINKEDIN_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a href="mailto:your-email@example.com">
                        Email
                    </a>

                </div>

            </div>


            {/* Copyright */}
            <div className="footer-bottom">

                <p>
                    © 2026 Sounak Banerjee. All rights reserved.
                </p>

                <p>
                    Built with React.
                </p>

            </div>

        </footer>
    );
}

export default Footer;