import styled from "styled-components";

export const Projects = styled.div`
  max-width: 1000px !important;
  margin: 0 auto;
  /* display: flex; */
  justify-content: center;
  /* margin: 0 auto; */
  .project-slick-slide {
    display: flex;
    justify-content: center;
    /* width: 100vw !important; */
    max-width: 100% !important;
    /* background-color: red; */
    border-radius: 4px;
    /* max-height: 95% !important; */
    overflow: hidden;
    padding: 0 1rem;
  }

  .navigation-buttons {
    display: flex;
    justify-content: space-around;
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
