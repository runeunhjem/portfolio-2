import * as S from "./index.styled";
import { lazy, Suspense } from "react";
import NavBar from "../NavBar";
import logo from "../../assets/logos/rundev-logo-in-brackets.svg";
import { useNavigate } from "react-router-dom";

const HamburgerAccordion = lazy(() => import("../HamburgerAccordion"));

/**
 * Header component containing the site logo, navigation bar, and hamburger accordion.
 * @returns {JSX.Element} The Header component.
 */
const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <S.HeaderContainer>
      <S.InnerContainer>
        <S.LogoLink to="/" onClick={handleLogoClick}>
          <img src={logo} alt="RUNDEV Logo" />
        </S.LogoLink>
        <S.NavContainer>
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <HamburgerAccordion />
            </Suspense>
          </div>
          <NavBar />
        </S.NavContainer>
      </S.InnerContainer>
    </S.HeaderContainer>
  );
};

export default Header;
