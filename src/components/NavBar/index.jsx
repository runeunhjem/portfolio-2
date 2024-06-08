import { useNavigate } from "react-router-dom";
import * as S from "./index.styled";
import { useEffect, useState } from "react";

/**
 * NavBar component that provides navigation links for the application.
 *
 * @returns {JSX.Element} The NavBar component.
 */
const NavBar = () => {
  const navigate = useNavigate();
  const [isProjectLinkActive, setIsProjectLinkActive] = useState(false);

  const headerHeight = 113;
  const offset = 10;

  const handleProjectsClick = (e) => {
    e.preventDefault();
    setIsProjectLinkActive(true);
    navigate("/", { replace: true });
    setTimeout(() => {
      const projectCardsElement = document.getElementById("project-cards");
      if (projectCardsElement) {
        const sectionTop =
          projectCardsElement.offsetTop - headerHeight - offset;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });
      }
    }, 100);
  };

  const handleScroll = () => {
    const projectCardsElement = document.getElementById("project-cards");
    if (projectCardsElement) {
      const rect = projectCardsElement.getBoundingClientRect();
      if (rect.top <= headerHeight + offset && rect.bottom >= headerHeight) {
        setIsProjectLinkActive(true);
      } else {
        setIsProjectLinkActive(false);
      }
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setIsProjectLinkActive(false);
    navigate("/", { replace: true });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.NavBarContainer className="nav-bar">
      <S.StyledNavLink to="/" onClick={handleHomeClick} className="hover-links">
        Home
      </S.StyledNavLink>
      <S.StyledNavLink
        to="/"
        onClick={handleProjectsClick}
        className={
          isProjectLinkActive ? "" : "project-active hover-links"
        }
      >
        Projects
      </S.StyledNavLink>
      <S.StyledNavLink to="/about" className="hover-links">
        About
      </S.StyledNavLink>
      <S.StyledNavLink to="/contact" className="hover-links">
        Contact
      </S.StyledNavLink>
    </S.NavBarContainer>
  );
};

export default NavBar;
