import { Link } from "react-router";
import projects from "../data/projects";
import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <div className="page-narrow">
      <section className="section-intro">
        <p className="eyebrow-heading">Projekter</p>
        <h1>Projekter</h1>
        <p>Nedenfor kan du se nogle af mine projekter.</p>
      </section>

      <section className="project-grid" aria-label="Projektliste">
        {projects.map((project) => (
          <article className="project-card" key={project.slug}>
            <Link
              to={`/projects/${project.slug}`}
              className="project-card-link"
            >
              <img src={project.image} alt={`Preview af ${project.title}`} />
            </Link>
            <div className="project-card-content">
              <div className="project-card-description">
                <p className="eyebrow">{project.year}</p>
                <h2>{project.title}</h2>
                <ul className="tag-list">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>

              <div className="project-card-button">
                <Link to={`/projects/${project.slug}`}>Se projekt →</Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;
