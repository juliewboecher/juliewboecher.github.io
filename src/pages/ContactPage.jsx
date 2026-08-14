import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="page-narrow">
      <div className="contact-text">
        <p className="eyebrow-heading">Kontakt</p>
        <h1>Lad os tale sammen.</h1>
        <h2 className="lead">Tøv ikke med at kontakte mig.</h2>
      </div>
      <ul className="contact-list">
        <div className="contact-item">
          <li>
            <a href="mailto:julie@boecher.dk">julie@boecher.dk</a>
          </li>
        </div>
        <div className="contact-item">
          <li>
            <a
              href="https://github.com/juliewboecher"
              rel="noreferrer"
              target="_blank"
          >
            <img
              className="contact-icon"
              src={`${import.meta.env.BASE_URL}gitsort.svg`}
              alt="GitHub"
            />
            <img
              className="contact-icon-red"
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
              className="contact-icon"
              src={`${import.meta.env.BASE_URL}linkedsort.svg`}
              alt="LinkedIn"
            />
            <img
              className="contact-icon-red"
              src={`${import.meta.env.BASE_URL}linkedred.svg`}
              alt="LinkedIn"
            />
          </a>
        </li>
        </div>
      </ul>
    </div>
  );
}

export default ContactPage;
