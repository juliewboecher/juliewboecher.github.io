function ContactPage() {
  return (
    <div className="page narrow">
      <p className="eyebrow">Kontakt</p>
      <h1>Lad os tale sammen.</h1>
      <p className="lead">
        Tilpas links og mailadresse, så siden peger på dine egne profiler.
      </p>

      <ul className="contact-list">
        <li>
          <a href="mailto:julie@boecher.dk">julie@boecher.dk</a>
        </li>
        <li>
          <a
            href="https://github.com/juliewboecher"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/julie-wendelboe-bøcher-8954a4418"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <img
        src={`${import.meta.env.BASE_URL}contact.JPG`}
        alt="Et billede af Julie"
        className="drawing-image"
      />
    </div>
  );
}

export default ContactPage;
