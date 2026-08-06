function AboutPage() {
  return (
    <div className="page-narrow">
      <p className="eyebrow">Om mig</p>
      <h1>Hvem er jeg?</h1>
      <div className="about-hero">
        <img
          src={`${import.meta.env.BASE_URL}portrait2.png`}
          alt="Et billede af Julie"
          className="drawing-image"
        />
        <img
          src={`${import.meta.env.BASE_URL}aboutme.svg`}
          alt="Et billede af Julie"
          className="about-me-image"
        />
      </div>
      <section className="info-list" aria-label="Om mig detaljer">
        <div>
          <h2>Jeg arbejder med</h2>
          <p>
            React, HTML, CSS, JavaScript, designproces og digitale produkter.
          </p>
        </div>
        <div>
          <h2>Jeg er nysgerrig på</h2>
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
