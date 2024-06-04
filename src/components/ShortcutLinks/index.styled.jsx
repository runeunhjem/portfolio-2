import styled from "styled-components";

export const ShortcutLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 0.5rem;
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
    &:hover {
      border-bottom: 1px solid var(--red-600);
      transform: scale(1.1);
      text-decoration: none;
    }
  }
`;

export const ShortcutLink = styled.a`
  color: var(--stone-600);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
