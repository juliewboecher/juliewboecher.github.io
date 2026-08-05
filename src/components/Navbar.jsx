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
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Forside">
        Julie Wendelboe Bøcher
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
