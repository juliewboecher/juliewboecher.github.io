import { Link } from "react-router";
import projects from "../data/projects";
import "./HomePage.css";


function HomePage() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="page">
      <p className="eyebrow">Portfolio</p>

      <section className="hero-section">
        <div className="hero-information">
          <h2 className="hero-text">
            Mit navn er Julie Wendelboe Bøcher, & jeg er
          </h2>
          <p className="hero-description"></p>
        </div>
        <h1>UX/UI Designer.</h1>
      </section>

      <a href="#featured-projects" className="read-more-button">
        <img
          src={`${import.meta.env.BASE_URL}dykned.svg`}
          className="read-more-image static-image"
          alt="Tag et kig på mine projekter"
        />
      </a>

      <div id="featured-projects" className="hero-actions">
        <Link className="button" to="/projects">
          Se projekter
        </Link>
        <Link className="button secondary" to="/contact">
          Kontakt mig
        </Link>
      </div>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Udvalgte projekter</p>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
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
                </div>

                <div className="project-card-button">
                  <Link to={`/projects/${project.slug}`}>Se projekt →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="see-all-projects">
        <Link className="see-all-button" to="/projects">
          Se alle projekter
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
