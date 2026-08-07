
function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-text">
        <img src={`${import.meta.env.BASE_URL}jwbhvid.svg`} alt="signatur" className="footer-signatur" />
        <a href="mailto:julie@boecher.dk">Email</a> |{" "}
        <a href="https://github.com/juliewboecher">GitHub</a> |{" "}
        <a href="https://www.linkedin.com/in/juliewboecher/">LinkedIn</a>
      </p>
      <p className="footer-text">© 2026 Julie Wendelboe Boecher. All rights reserved.</p>
    </footer>
  );
}
export default Footer;