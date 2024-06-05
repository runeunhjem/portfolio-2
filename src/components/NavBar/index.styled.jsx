import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBarContainer = styled.nav`
  display: none;
  justify-content: space-between;
  margin-right: 1.3rem;
  margin-top: 3rem;
  z-index: 1001;
  gap: 1.2rem;

  @media (min-width: 640px) {
    display: flex;
  }
`;

export const StyledNavLink = styled(NavLink)`
  /* margin-right: 1.20rem; */
  text-decoration: none;
  font-size: 1.25rem;
  height: 30px;
  color: var(--stone-600);
  padding: 0 0.5rem;
  border-radius: 12px;
  display: inline-block;
  width: auto;
  transition:
    transform 0.2s ease-in-out,
    border-bottom 0.2s ease-in-out;

  &:hover {
    border-bottom: 1px solid var(--red-600);
    transform: scale(1.1);
  }

  &.active {
    font-weight: bold;
    text-decoration: none;
    border-bottom: none;
    transform: scale(1.0);
    cursor: default;
  }
`;
