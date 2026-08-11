import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-left">
          <img
            src={`${import.meta.env.BASE_URL}jwbhvid2.svg`}
            alt="Julie Wendelboe Bøcher"
            className="footer-signatur"
          />
          <p className="footer-text">© 2026 Julie Wendelboe Bøcher.</p>
        </div>

        <div className="footer-links">
          <a className="footer-mail" href="mailto:dinmail@email.com">
            julie@boecher.dk
          </a>
          <a href="https://github.com/">
            <img
              className="footer-icon icon-white"
              src={`${import.meta.env.BASE_URL}githvid.svg`}
              alt="GitHub"
            />
            <img
              className="footer-icon icon-red"
              src={`${import.meta.env.BASE_URL}gitred.svg`}
              alt=""
            />
          </a>

          <a href="https://linkedin.com/">
            <img
              className="footer-icon icon-white"
              src={`${import.meta.env.BASE_URL}linkedhvid.svg`}
              alt="LinkedIn"
            />
            <img
              className="footer-icon icon-red"
              src={`${import.meta.env.BASE_URL}linkedred.svg`}
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
