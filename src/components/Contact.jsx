function Contact()
{
    return(
        
        <section id = "contact">

            <h2>CONTACT</h2>

            <p>
                Have a project idea, an opportunity, or simply want to
                discuss software development and technology? I'd be happy
                to hear from you.
            </p>

            <p>
                Whether you're interested in collaborating on a project,
                discussing an idea, or connecting professionally, feel free
                to get in touch through any of the platforms below.
            </p>


            <div className="contact-details">

                <div className="contact-item">

                    <h3>Email</h3>

                    <a href="mailto:your-email@example.com">
                        sounakbanerjee28@gmail.com
                    </a>

                </div>


                <div className="contact-item">

                    <h3>GitHub</h3>

                    <a
                        href="https://github.com/28-Sounak"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github.com/28-Sounak
                    </a>

                </div>


                <div className="contact-item">

                    <h3>LinkedIn</h3>

                    <a
                        href="YOUR_LINKEDIN_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                </div>

            </div>


            <div className="contact-cta">

                <h3>Let's Connect</h3>

                <p>
                    I'm always open to learning, collaborating, and
                    connecting with people who share an interest in
                    technology and software development.
                </p>

                <a href="mailto:your-email@example.com">
                    Get In Touch
                </a>

            </div>

        </section>

    );
}

export default Contact;