import styled from "styled-components";

export const ShortcutLinksWrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 113px;
  background-color: var(--orange-100);
  color: var(--stone-600);
  margin: 0;
  padding: 0;
  z-index: 998;
`;

export const ShortcutLinks = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  width: 600px;
  max-width: 100%;
  height: auto;
  left: 0;
  right: 0;
  padding: 0.5rem;
  background-color: var(--orange-100);
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  align-items: center;
  border-radius: 0px;

  @media (max-width: 600px) {
    gap: 0.25rem;
    justify-content: space-around;
  }

  a {
    text-align: center;
    transition:
      transform 0.2s ease-in-out,
      border-bottom 0.2s ease-in-out;
    padding: 0 0.5rem;
    display: inline-block;
    width: 70px;
    height: 30px;

    @media (max-width: 600px) {
      width: 60px;
      height: 25px;
    }
    &.active {
      border-bottom: 2px solid var(--red-600);
    }
  }
`;

export const ShortcutLink = styled.a`
  color: var(--stone-600);
  text-decoration: none;
  &:hover {
    color: var(--red-600) !important;
    text-decoration: underline;
  }
  &.active {
    color: var(--stone-600) !important;
    font-weight: bold !important;
  }
`;
