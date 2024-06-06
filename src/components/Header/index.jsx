import * as S from "./index.styled";
import { lazy, Suspense } from "react";
import NavBar from "../NavBar";
import logo from "../../assets/logos/rundev-logo-in-brackets.svg";

// Lazy load the HamburgerAccordion component
const HamburgerAccordion = lazy(() => import("../HamburgerAccordion"));

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.InnerContainer>
        <S.LogoLink to="/">
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
