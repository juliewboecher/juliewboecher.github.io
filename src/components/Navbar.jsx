import { NavLink } from "react-router";

function Navbar() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/">
        <img className="signatur" src={`${import.meta.env.BASE_URL}signatur.svg`} alt="Logo" />
      </NavLink>

      <nav className="site-nav" aria-label="Primær navigation">
        <NavLink to="/" end>
          Forside
        </NavLink>
        <NavLink to="/projects">Projekter</NavLink>
        <NavLink to="/about">Om mig</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
