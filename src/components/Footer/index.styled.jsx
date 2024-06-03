import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: var(--orange-100);
  padding-bottom: 2rem;
  text-align: center;
  color: #4b5563; /* text-stone-600 */
`;

export const FooterContainer = styled.div`
  background-color: var(--orange-100);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.6);
  margin: 2rem auto;
  width: 92vw;
  max-width: 1160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem !important;
  margin-bottom: 3rem;
  width: 100%;
  @media (min-width: 768px) {
    margin-bottom: 0;
    gap: 0;
  }
`;

export const FooterLink = styled(NavLink)`
  width: 120px;
  height: 24px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  transition:
  transform 0.2s ease-in-out,
  border-bottom 0.2s ease-in-out;
  background-color: ${({ isActive }) =>
    isActive ? "var(--orange-200)" : "transparent"};
  .active-link {
    border-radius: 12px;
    &:hover {
      transform: scale(1.1);
      border-bottom: 1px solid var(--red-600);
    }
  }
  &:hover {
    transform: scale(1.1);
    border-bottom: 1px solid var(--red-600);
  }
  `;

export const ExternalLink = styled.a`
  transition:
  transform 0.2s ease-in-out,
  border-bottom 0.2s ease-in-out;
  border-radius: 12px;
  height: 24px;
  border-radius: 12px;
  width: 200px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.6);
  &:hover {
    transform: scale(1.1);
    border-bottom: 1px solid var(--red-600);
  }
`;

export const SocialLink = styled.a`
  border-radius: 9999px;
  background-color: var(--stone-500);
  padding: 0.5rem;
  color: var(--orange-100);
  &:hover {
    background-color: var(--red-600);
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    @media (min-width: 768px) {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const Logo = styled.img`
  width: 250px;
  max-width: 100%;
  height: auto;
  max-height: 100%;
`;
