import { Link } from "react-router";
import projects from "../data/projects";

function HomePage() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="page">
      <p className="eyebrow">Portfolio</p>
      <div className="hero-red-glow"></div>
      <section className="hero-section">
        <h1>Hejsa!</h1>
        <div className="hero-information">
          <h2 className="hero-text">Mit navn er Julie Wendelboe Bøcher</h2>
          <p className="hero-description">& jeg er UX/UI designer.</p>
        </div>
      </section>

      <a href="#featured-projects" className="look-button">
        <img
          src={`${import.meta.env.BASE_URL}bigarrowred.svg`}
          className="look-image static-image"
          alt="Tag et kig på mine projekter"
        />
      </a>

      <div className="actions">
        <Link className="button" to="/projects">
          Se projekter
        </Link>
        <Link className="button secondary" to="/contact">
          Kontakt mig
        </Link>
      </div>

      <section id="featured-projects" className="section">
        <div className="section-heading">
          <p className="eyebrow">Udvalgte projekter</p>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card">
              <img src={project.image} alt={`Preview af ${project.title}`} />
              <div className="project-card-content">
                <p className="eyebrow">{project.year}</p>
                <h3>{project.title}</h3>

                <Link to={`/projects/${project.slug}`}>Læs mere →</Link>
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
