function AboutPage() {
  return (
    <div className="page-narrow">
      <p className="eyebrow">Om mig</p>

      <div className="about-hero">
        <div>
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
