import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-orange-200 p-4 text-stone-600 flex justify-between">
      <img src="/src/assets/logos/rundev-logo-in-brackets.svg" alt="RUNDEV Logo" className="max-w-64" />
      <nav className="max-w-xl justify-end">
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
