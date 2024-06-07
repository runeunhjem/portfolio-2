import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBarContainer = styled.nav`
  display: none;
  justify-content: space-between;
  margin-right: 1.3rem;
  margin-top: 3.5rem;
  z-index: 1001;
  gap: 0.5rem;

  @media (min-width: 640px) {
    display: flex;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1rem;
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
    border-bottom: 1px solid var(--red-600) !important;
    border-radius: 0px !important;
    transform: scale(1);
    cursor: default;
  }

  &.project-active {
    cursor: pointer !important;
    text-decoration: none !important;
    border-bottom: 0px solid var(--red-600) !important;
    &.active {
      font-weight: 400 !important;
      border-radius: 0px !important;
      transform: scale(0.95) !important;
    }
  }
`;
