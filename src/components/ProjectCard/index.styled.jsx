import styled from "styled-components";

export const Project = styled.div`
  padding: 0;
  margin: 0 auto;
  background: var(--orange-200);
  /* border: 1px solid var(--stone-400); */
  box-shadow: inset -1px -1px 10px rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  text-align: center;
  overflow: hidden;
  /* width: 90%; */
  /* max-width: 80vw !important; */
  /* max-width: 95vw; */
  /* height: 100%; */

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
  @media (min-width: 1200px) {
    width: 100% !important;
    max-width: 100%;
    margin: 0 auto !important;
  }
  h3 {
    margin: 0 auto;
    max-width: 90%;
    font-size: 1.5rem;
    font-weight: 700;

    @media (max-width: 600px) {
      font-size: 1.2rem;
      margin: 0.5rem 0;
    }
  }

  p {
    margin: 0 auto;
    max-width: 90%;
    font-size: 1rem;
    font-weight: 500;

    @media (max-width: 600px) {
      font-size: 0.875rem;
      margin: 0.25rem 0;
    }
  }

  .description {
    overflow-y: auto;
    height: 74px;
  }

  .carousel-container {
    overflow: hidden;
    margin: 0 auto;
    position: relative !important;
    /* max-width: 90% !important; */
    /* position:  relative; */
    justify-content: center;

    @media (max-width: 600px) {
      margin: 0.5rem 0;
      height: auto; // CONTAINER HEIGHT MUST BE RESPONSIVE, BUT IMAGE HEIGHT MUST BE FIXED
    }

    .slick-slide {
      border-radius: 14px !important;
    }
    .slick-dots {
      display: block !important;
    }

    @media (max-width: 768px) {
      .slick-dots {
        display: none !important;;
      }
    }

    .slick-prev {
      left: 2px;
      z-index: 1000;
    }
    .slick-next {
      z-index: 1000;
      right: 20px;
      @media (max-width: 600px) {
        right: 0px;
      }
      @media (max-width: 1069px) {
        right: 14px;
      }
    }

    .image-wrap {
      border-radius: 14px !important;
    }
    img {
      border: 1px solid var(--stone-600);
      display: flex;
      justify-content: center;
      margin: 0 auto;
      width: 800px;
      max-width: 100% !important;
      height: 400px;
      max-height: 100%;
      border-radius: 14px;
      object-fit: cover;
      object-position: top center;
      @media screen and (max-width: 641px) {
        height: 300px;
      }
      @media screen and (max-width: 468px) {
        height: 200px;
      }
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
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;

    button {
      padding: 0.5rem 1rem;
      white-space: nowrap;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: inherit;
      color: inherit;
      width: 160px;

      &.button-game-hub {
        background-color: var(--color-yellow-gamehub);
        color: var(--stone-950);
      }

      &.button-chefs-table {
        background-color: var(--color-burgundy-chefs-table);
        color: var(--white);
      }

      &.button-csm {
        background-color: var(--color-blue-csm);
        color: var(--white);
      }

      &.button-movietalk {
        background-color: var(--color-dark-movietalk);
        color: var(--color-yellow-gamehub);
        border: 1px solid var(--color-yellow-gamehub);
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
