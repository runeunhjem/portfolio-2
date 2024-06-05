import * as S from "./index.styled";
import HamburgerAccordion from "../HamburgerAccordion";
import NavBar from "../NavBar";
import logo from "../../assets/logos/rundev-logo-in-brackets.svg";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.InnerContainer>
        <S.LogoLink to="/">
          <img src={logo} alt="RUNDEV Logo" />
        </S.LogoLink>
        <S.NavContainer>
          <div>
            <HamburgerAccordion />
          </div>
          <NavBar />
        </S.NavContainer>
      </S.InnerContainer>
    </S.HeaderContainer>
  );
};

export default Header;
