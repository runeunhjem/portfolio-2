import styled from "styled-components";

export const ShortcutLinks = styled.div`
  position: sticky;
  top: 125px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  z-index: 999;
  width: 600px;
  max-width: 95%;
  height: auto;
  left: 0;
  right: 0;
  padding: 0.5rem;
  background-color: var(--orange-100);
  /* box-shadow: 2px 4px 3px 0 rgba(0, 0, 0, 0.4); */
  align-items: center;
  border-radius: 12px;

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
    /* border-radius: 12px; */
    display: inline-block;
    width: 70px;
    height: 30px;

    @media (max-width: 600px) {
      width: 60px;
      height: 25px;
    }
  &.active {
    border-bottom: 2px solid var(--red-600);
    /* color: var(--red-600) !important; */
    /* box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.4); */
    /* font-weight: bold !important; */
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
    /* box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.4); */
    font-weight: bold !important;
  }
`;
