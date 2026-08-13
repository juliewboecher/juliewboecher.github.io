import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="page-narrow">
      <p className="eyebrow-heading">Om mig</p>

      <div className="about-hero">
        <div className="about-hero-text">
          <h1>Hvem er jeg?</h1>
          <p>
            Jeg er en passioneret udvikler med fokus på at skabe brugervenlige og
            æstetisk tiltalende digitale oplevelser.
          </p>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}portrait2.png`}
          alt="Et billede af Julie"
          className="drawing-image"
        />
      </div>

      <section className="about-facts">
        <h2></h2>
          <p>Til dagligt læser til Multimediedesigner på Erhvervsakademi Aarhus</p>
          <p>Som studiejob arbejder som Social Media Manager for Café Smagløs</p>
          <p>I min fritid...</p>
      </section>

      <section className="info-list" aria-label="Om mig detaljer">
        <div className="info-card">
          <h2 className="info-card-title">Jeg arbejder med</h2>
          <p>
            React, HTML, CSS, JavaScript, designproces og digitale produkter.
          </p>
        </div>
        <div className="info-card">
          <h2 className="info-card-title">Jeg er nysgerrig på</h2>
          <p>
            Brugeroplevelser, visuel identitet og hvordan kode bliver til noget
            brugbart.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
