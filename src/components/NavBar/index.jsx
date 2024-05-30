import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar xs:flex mr-3 mt-11 hidden justify-between z-[1001]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `hover-links mr-2 ${isActive ? "font-bold" : ""}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `hover-links mr-2 ${isActive ? "font-bold" : ""}`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `hover-links ${isActive ? "font-bold" : ""}`
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;
