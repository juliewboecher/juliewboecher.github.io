import { NavLink, useLocation } from "react-router";
import { useEffect, useState } from "react";

function Navbar() {
  const location = useLocation();
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (location.pathname === "/") {
      setAnimationKey((prev) => prev + 1);
    }
  }, [location.pathname]);

  return (
    <header className="site-header-box">
      <div className="site-header">
        <NavLink className="brand" to="/" aria-label="Forside">
          <img src={`${import.meta.env.BASE_URL}initialer.svg`} alt="Logo" />
        </NavLink>

        <nav className="site-nav" aria-label="Primær navigation">

          <NavLink to="/projects">Projekter</NavLink>

          <NavLink to="/about">Om mig</NavLink>

          <NavLink to="/contact">Kontakt</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
