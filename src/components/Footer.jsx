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
          <a href="mailto:dinmail@email.com">Email</a>
          <a href="https://github.com/">GitHub</a>
          <a href="https://linkedin.com/">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
