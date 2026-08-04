import { Link, useParams } from "react-router";
import projects from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="page narrow">
        <p className="eyebrow">404</p>
        <h1>Projektet blev ikke fundet</h1>
        <p>Det projekt findes ikke i listen endnu.</p>
        <Link className="button" to="/projects">
          Tilbage til projekter
        </Link>
      </div>
    );
  }

  return (
    <article className="page narrow">
      <Link className="back-link" to="/projects">
        Tilbage til projekter
      </Link>
      <div className="detail-hero">
        {project.image && (
          <img className="detail-hero-image" src={project.image} alt="" />
        )}
      </div>
      <p className="eyebrow">{project.year}</p>
      <h1>{project.title}</h1>
      <p className="lead">{project.description}</p>

      <ul className="tag-list">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className="actions">
        {project.links.map((link) => (
          <a
            className="button secondary"
            href={link.href}
            key={link.href}
            rel="noreferrer"
            target="_blank"
          >
            {link.label}
          </a>
        ))}
      </div>
        {project.image && (
          <img className="detail-image" src={project.image2} alt="" />
        )}

        {project.image3 && (
          <img className="detail-image" src={project.image3} alt="" />
        )}
        {project.image4 && (
          <img className="detail-image" src={project.image4} alt="" />
        )}
        {project.image5 && (
          <img className="detail-image" src={project.image5} alt="" />
        )}
    
    </article>
  );
}

export default ProjectPage;
