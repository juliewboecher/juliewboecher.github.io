function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <img
          src={`${import.meta.env.BASE_URL}jwbhvid2.svg`}
          alt="Julie Wendelboe Bøcher"
          className="footer-signatur"
        />

        <p className="footer-text">© 2026 Julie Wendelboe Bøcher.</p>

        <div className="footer-links">
          <a href="mailto:dinmail@email.com">
              julie@boecher.dk
          </a>
          <a href="https://github.com/">
            <img className="footer-icon" src={`${import.meta.env.BASE_URL}githvid.svg`} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/">
            <img className="footer-icon" src={`${import.meta.env.BASE_URL}linkedhvid.svg`} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
