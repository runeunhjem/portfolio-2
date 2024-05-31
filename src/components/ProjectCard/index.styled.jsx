import styled from "styled-components";

export const Project = styled.div`
  padding: 1rem;
  margin: 0 auto;
  background: var(--orange-200);
  border: 1px solid var(--stone-300);
  border-radius: 4px;
  text-align: center;
  width: 90%;
  /* max-width: 100%; */
  max-width: 95vw;
  height: 100%;

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

    overflow: hidden;
    margin: 0 auto;


    @media (max-width: 600px) {
      margin: 0.5rem 0;
      height: auto; // CONTAINER HEIGHT MUST BE RESPONSIVE, BUT IMAGE HEIGHT MUST BE FIXED
    }

    .slick-slide {
      display: flex;
      justify-content: center;
    }

    img {
      /* max-height: 100%; */
      width: 600px;
      height: 400px;
      border-radius: 4px;
    }
    /* @media screen and (min-width: 641px) {
      height: 300px;
    }
    @media screen and (min-width: 769px) {
      height: 300px;
    } */
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
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;

    button {
      padding: 0 0.5rem;
      white-space: nowrap;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background-color: inherit;
      color: inherit;

      &.button-game-hub {
        background-color: var(--color-yellow-gamehub);
        color: var(--stone-950);
      }

      &.button-chef-s-table {
        background-color: var(--color-burgundy-chefs-table);
        color: var(--white);
      }

      &.button-csm {
        background-color: var(--color-blue-csm);
        color: var(--white);
      }

      &.button-dreambids {
        background-color: var(--color-blue-dreambids);
        color: var(--white);
      }

      &.button-cgg {
        background-color: var(--color-purple-cgg);
        color: var(--white);
      }

      &.button-holidaze {
        background-color: var(--color-sky-holidaze);
        color: var(--stone-950);
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
