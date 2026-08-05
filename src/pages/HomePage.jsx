import { Link } from "react-router";
import projects from "../data/projects";

function HomePage() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="page">
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-information">
            <p className="eyebrow">Portfolio</p>
            <h1>Velkommen!</h1>
            <h2 className="hero-text">Hej, mit navn er Julie Wendelboe Bøcher.</h2>
            <h2 className="hero-text">Jeg er designer, og elsker at skabe kreative og værdiskabende løsninger.</h2>
            <div className="actions">
              <Link className="button" to="/projects">
                Se projekter
              </Link>
              <Link className="button secondary" to="/contact">
                Kontakt mig
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src={`${import.meta.env.BASE_URL}initialer2.gif`}
              alt="Et billede af Julie"
              className="portrait-image"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Udvalgte projekter</p>
          <h2>Start med få projekter og gør dem stærke.</h2>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.slug}>
              <img src={project.image} alt={`Preview af ${project.title}`} />
              <div className="project-card-content">
                <p className="eyebrow">{project.year}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <Link to={`/projects/${project.slug}`}>Læs mere</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
