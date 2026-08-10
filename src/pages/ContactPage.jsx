function ContactPage() {
  return (
    <div className="page-narrow">
      <p className="eyebrow">Kontakt</p>
      <h1>Lad os tale sammen.</h1>
      <p className="lead">
        Tøv ikke med at kontakte mig.
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
            <img
              className="footer-icon"
              src={`${import.meta.env.BASE_URL}gitred.svg`}
              alt="GitHub"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/julie-wendelboe-bøcher-8954a4418"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="footer-icon"
              src={`${import.meta.env.BASE_URL}linkedred.svg`}
              alt="LinkedIn"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactPage;
