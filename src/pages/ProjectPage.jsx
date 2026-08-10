import { Link, useParams } from "react-router";
import projects from "../data/projects";
import { useEffect, useRef } from "react";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="page-narrow">
        <p className="eyebrow">404</p>
        <h1>Projektet blev ikke fundet</h1>
        <p>Det projekt findes ikke i listen endnu.</p>
        <Link className="button" to="/projects">
          Tilbage til projekter
        </Link>
      </div>
    );
  }
   const imagesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    imagesRef.current.forEach((image) => {
      if (image) observer.observe(image);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <article className="page-narrow">
      <Link className="back-link" to="/projects">
        Tilbage til projekter
      </Link>
      <div className="detail-hero">
        <div className="detail-hero-information">
          <p className="eyebrow">{project.year}</p>
          <h1 className="detail-title">{project.title}</h1>
          <ul className="tag-list">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className="detail-hero-image">
          {project.image && (
            <img className="detail-hero-img" src={project.image} alt="" />
          )}
        </div>
      </div>
      {project.image && (
        <img className="detail-image" src={project.image2} alt="" />
      )}
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

      <section className="detail-text-section">
        <h2>Processbeskrivelse</h2>
        <p className="lead">{project.description}</p>
      </section>
      <div className="detail-images">
        {project.image3 && (
          <img
            ref={(el) => (imagesRef.current[0] = el)}
            className="detail-image"
            src={project.image3}
            alt=""
          />
        )}

        {project.image4 && (
          <img
            ref={(el) => (imagesRef.current[1] = el)}
            className="detail-image"
            src={project.image4}
            alt=""
          />
        )}

        {project.image5 && (
          <img
            ref={(el) => (imagesRef.current[2] = el)}
            className="detail-image"
            src={project.image5}
            alt=""
          />
        )}

        {project.image6 && (
          <img
            ref={(el) => (imagesRef.current[3] = el)}
            className="detail-image"
            src={project.image6}
            alt=""
          />
        )}
      </div>
    </article>
  );
}

export default ProjectPage;
