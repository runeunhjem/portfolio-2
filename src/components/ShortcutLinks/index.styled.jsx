import styled from "styled-components";

export const ShortcutLinks = styled.div`
  position: sticky;
  top: 125px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  z-index: 999;
  width: fit-content;
  height: 40px;
  left: 0;
  right: 0;
  background-color: var(--orange-100);
  box-shadow: 2px 4px 3px 0 rgba(0, 0, 0, 0.4);
  align-items: center;
  border-radius: 12px;
  a {
    text-align: center;
    transition:
      transform 0.2s ease-in-out,
      border-bottom 0.2s ease-in-out;
    padding: 0 0.5rem;
    border-radius: 12px;
    display: inline-block;
    width: 70px;
    height: 30px;
    /* &:hover {
      border-bottom: 1px solid var(--red-600);
      transform: scale(1.1);
      text-decoration: none;
    } */
    /* &.active {
      border-bottom: 1px solid var(--red-600);
      transform: scale(1.1);
      text-decoration: none;
    } */
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
    color: var(--red-600) !important;
    font-weight: bold !important;
  }
`;
