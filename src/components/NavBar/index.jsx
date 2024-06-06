import * as S from "./index.styled";

/**
 * NavBar component that provides navigation links for the application.
 *
 * @returns {JSX.Element} The NavBar component.
 */
const NavBar = () => {
  return (
    <S.NavBarContainer className="nav-bar">
      <S.StyledNavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "hover-links")}
      >
        Home
      </S.StyledNavLink>
      <S.StyledNavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "hover-links")}
      >
        About
      </S.StyledNavLink>
      <S.StyledNavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "hover-links")}
      >
        Contact
      </S.StyledNavLink>
    </S.NavBarContainer>
  );
};

export default NavBar;
