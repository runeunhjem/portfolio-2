import styled from "styled-components";

export const Projects = styled.div`
  .slick-slide {
    display: flex;
    justify-content: center;
    /* width: 600px; */
    width: 95vw;
    /* height: 600px; */
  }

  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    button {
      padding: 0.5rem 1rem;
      background-color: var(--primary-color);
      color: var(--secondary-color);
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: var(--stone-600) !important;
      }
    }
  }
`;
