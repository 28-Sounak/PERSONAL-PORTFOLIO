import projects from "../data/projects.js"

function Projects()
{
    return(
        <section id = "projects">

            <h2>PROJECTS</h2>

            <p>
                A selection of projects that represent my experience in
                software development, system programming, application
                development, and algorithmic problem solving.
            </p>

            <div className = "projects_container">

                {projects.map((project) => (

                    <article
                        className="project-card"
                        key={project.id}
                    >

                        <h3>{project.title}</h3>

                        <p>
                            {project.description}
                        </p>


                        <p>
                            <strong>Category:</strong>{" "}
                            {project.category}
                        </p>


                        <p>
                            <strong>Status:</strong>{" "}
                            {project.status}
                        </p>


                        <div className="project-technologies">

                            {project.technologies.map((technology) => (

                                <span
                                    className="technology"
                                    key={technology}
                                >
                                    {technology}
                                </span>

                            ))}

                        </div>


                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>

                    </article>

                ))}

            </div>

        </section>
    );
}

export default Projects;