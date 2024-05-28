import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar mt-12 hidden w-2/3 justify-end xs:flex mr-3">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "mr-4 font-bold" : "mr-4")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "mr-4 font-bold" : "mr-4")}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "font-bold" : "")}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;
