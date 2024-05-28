import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "mr-4 font-bold" : "mr-4")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "mr-4 font-bold" : "mr-4")}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "font-bold" : "")}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
