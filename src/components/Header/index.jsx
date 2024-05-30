// Header.jsx
import HamburgerAccordion from "../HamburgerAccordion";
import NavBar from "../NavBar";
import logo from "../../assets/logos/rundev-logo-in-brackets.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mx-auto flex w-full justify-between py-4 px-1 sm:p-4"
      style={ {
        color: "var(--stone-600)",
        backgroundColor: "var(--orange-200)",
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.2)",
        borderBottom: "1px solid var(--stone-400)",
    }}>
      <div className="header-container mx-auto flex w-full max-w-4xl justify-between">
        <Link to="/">
        <img src={logo} alt="RUNDEV Logo" className="max-w-64 z-[5000]" />
        </Link>
        <div className="nav-container relative mx-auto flex w-full max-w-4xl flex-col items-end">
          <div style={{ position: "absolute", top: 0, right: 0, zIndex: 1000 }}>
            <HamburgerAccordion />
          </div>
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
