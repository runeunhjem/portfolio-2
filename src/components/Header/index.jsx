import HamburgerAccordion from "../HamburgerAccordion";
import NavBar from "../NavBar";

const Header = () => {
  return (
    <header className=" mx-auto flex w-full justify-between bg-orange-200 p-4 text-stone-600">
      <div className="header-container mx-auto flex w-full max-w-4xl justify-between">
        <img
          src="/src/assets/logos/rundev-logo-in-brackets.svg"
          alt="RUNDEV Logo"
          className=" max-w-64"
        />
        <div className="relative nav-container mx-auto flex w-full max-w-4xl flex-col items-end">
          <HamburgerAccordion />
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
