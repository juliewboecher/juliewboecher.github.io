import { Link, useParams } from "react-router";
import projects from "../data/projects";
import { useEffect, useRef } from "react";
import "./ProjectPage.css";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

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

  if (!project) {
    return (
      <>
        <h1>404</h1>
        <p>Projektet blev ikke fundet</p>
        <p>Det projekt findes ikke i listen endnu.</p>

        <Link className="back-link" to="/projects">
          Tilbage til projekter
        </Link>
      </>
    );
  }

  return (
    <article className="page-narrow">
      {/* Tilbage til projekter */}
      <Link className="back-link" to="/projects">
        Tilbage til projekter
      </Link>

      {/* Projekt information */}
      <div className="eyebrow-container">
        <p className="eyebrow">{project.year}</p>
        <p className="eyebrow">{project.type}</p>
      </div>

      <h1 className="detail-title">{project.title}</h1>

      <p>{project.summary}</p>

      <ul className="tag-list">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      {/* Hero billede */}
      <div className="detail-hero-image">
        {project.image && (
          <img className="detail-hero-img" src={project.image1} alt="" />
        )}
      </div>

      {/* Links */}
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

      {/* Processbeskrivelse */}
      <section className="detail-text-section">
        <p className="lead">{project.description}</p>
      </section>

      {/* Projektets process / billeder */}
      <section className="project-process">
        {project.image2 && (
          <div className="process-row reverse">
            <div className="process-image">
              <img
                ref={(el) => (imagesRef.current[0] = el)}
                src={project.image2}
                alt=""
              />
            </div>

            <div className="process-text">
              <h3 className="project-title">{project.title3}</h3>
              <p>{project.description3}</p>
            </div>
          </div>
        )}

        {/* Billede 3 - venstre */}
        {project.image3 && (
          <div className="process-row">
            <div className="process-image">
              <img
                ref={(el) => (imagesRef.current[1] = el)}
                src={project.image3}
                alt=""
              />
            </div>

            <div className="process-text">
              <h3 className="project-title">{project.title2}</h3>
              <p> {project.description2}</p>
            </div>
          </div>
        )}

        {/* Billede 4 - højre */}
        {project.image4 && (
          <div className="process-row reverse">
            <div className="process-image">
              <img
                ref={(el) => (imagesRef.current[2] = el)}
                src={project.image4}
                alt=""
              />
            </div>

            <div className="process-text">
              <h3 className="project-title">{project.title3}</h3>
              <p>{project.description3}</p>
            </div>
          </div>
        )}

        {/* Billede 5 - venstre */}
        {project.image5 && (
          <div className="process-row">
            <div className="process-image">
              <img
                ref={(el) => (imagesRef.current[3] = el)}
                src={project.image5}
                alt=""
              />
            </div>

            <div className="process-text">
              <h3 className="project-title">{project.title4}</h3>
              <p>{project.description4}</p>
            </div>
          </div>
        )}

        {/* Billede 6 - højre */}
        {project.image6 && (
          <div className="process-row reverse">
            <div className="process-image">
              <img
                ref={(el) => (imagesRef.current[4] = el)}
                src={project.image6}
                alt=""
              />
            </div>

            <div className="process-text">
              <h3 className="project-title">{project.title5}</h3>
              <p>{project.description5}</p>
            </div>
          </div>
        )}

        {/* Billede 7 - venstre */}
        {project.image7 && (
          <div className="process-row">
            <div className="process-image">
              <img
                ref={(el) => (imagesRef.current[5] = el)}
                src={project.image7}
                alt=""
              />
            </div>

            <div className="process-text">
              <h3 className="project-title">{project.title6}</h3>
              <p>{project.description6}</p>
            </div>
          </div>
        )}
      </section>
    </article>
  );
}

export default ProjectPage;
