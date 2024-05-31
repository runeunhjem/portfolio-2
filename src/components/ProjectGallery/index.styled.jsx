import styled from "styled-components";

export const Projects = styled.div`
  .slick-slide {
    display: flex;
    justify-content: center;
    width: 95vw;
  }

  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    button {
      padding: 0.5rem 1rem;
      background-color: var(--orange-200) !important;
      color: var(--stone-950) !important;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: var(--stone-600) !important;
      }
    }
  }
`;
