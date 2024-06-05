import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: 0 auto;
  display: flex;
  width: 100%;
  justify-content: between;
  padding: 1rem 0.25rem;
  color: var(--stone-600);
  background-color: var(--orange-200);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid var(--stone-400);

  @media (min-width: 640px) {
    padding: 1rem;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 64rem;
  justify-content: between;
  margin: 0 auto;
`;

export const LogoLink = styled(Link)`
  z-index: 5000;
  max-width: 64px;

  img {
    max-width: 64px;
    margin-left: 0.75rem;
  }
`;

export const NavContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 64rem;
  flex-direction: column;
  align-items: end;
  margin: 0 auto;

  > div {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;
  }
`;
