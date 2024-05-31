import styled from "styled-components";

export const Projects = styled.div`
  .slick-slide {
    display: flex;
    justify-content: center;
    width: 90vw;
    height: auto;
    /* max-height: 100%; */
    /* max-width: 800px; */
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
        background-color: var(--primary-hover-color);
      }
    }
  }
`;

export const Project = styled.div`
  padding: 1rem;
  background: var(--orange-200);
  border: 1px solid var(--stone-300);
  border-radius: 4px;
  text-align: center;
  width: 800px;
  max-width: 800px;
  /* max-width: 100%; */

  @media (max-width: 600px) {
    padding: 0.5rem;
  }

  h3 {
    margin: 1rem 0;
    font-size: 1.5rem;

    @media (max-width: 600px) {
      font-size: 1.2rem;
      margin: 0.5rem 0;
    }
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;

    @media (max-width: 600px) {
      font-size: 0.875rem;
      margin: 0.25rem 0;
    }
  }

  .carousel-container {
    margin: 1rem 0;
    width: 100%;
    overflow: hidden;

    @media (max-width: 600px) {
      margin: 0.5rem 0;
      height: auto; /* Ensure the container adapts to the content */
    }

    .slick-slide {
      display: flex;
      justify-content: center;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }
  }

  .carousel-counter {
    margin-bottom: 1rem;
  }

  a {
    display: inline-block;
    margin-top: 1rem;
    color: var(--link-color);
    text-decoration: underline;

    &:hover {
      color: var(--link-hover-color);
    }
  }

  .buttons-container {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;

    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background-color: inherit;
      color: inherit;

      &.button-game-hub {
        background-color: var(--color-yellow-gamehub);
        color: var(--color-black);
      }

      &.button-chef-s-table {
        background-color: var(--color-burgundy-chefs-table);
        color: var(--color-white);
      }

      &.button-csm {
        background-color: var(--color-blue-csm);
        color: var(--color-white);
      }

      &.button-dreambids {
        background-color: var(--color-secondary-dreambids);
        color: var(--color-white-dreambids);
      }

      &.button-cgg {
        background-color: var(--color-secondary-purple-cgg);
        color: var(--color-white-cgg);
      }

      &.button-holidaze {
        background-color: var(--color-secondary-holidaze);
        color: var(--color-black);
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
