import styled from "styled-components";

export const Project = styled.div`
  padding: 0;
  margin: 0 auto !important;
  background: var(--orange-100);
  /* box-shadow: inset -1px -1px 10px rgba(0, 0, 0, 0.6); */
  border-radius: 12px;
  text-align: center;
  overflow: hidden;
  /* align-items: center; */

  @media (max-width: 640px) {
    padding: 0.5rem;
  }
  @media (min-width: 1200px) {
    width: 100% !important;
    max-width: 100%;
    margin: 0 auto !important;
  }
  h3 {
    margin: 0 auto !important;
    max-width: 90%;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;

    @media (max-width: 640px) {
      font-size: 1.5rem;
      margin: 0.5rem 0;
    }
  }

  p {
    margin: 0 auto !important;
    max-width: 90%;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;

    @media (max-width: 640px) {
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
    justify-content: center;

    @media (max-width: 640px) {
      margin: 0.5rem 0;
      height: auto;
    }

    .slick-slide {
      border-radius: 14px !important;
    }
    .slick-dots {
      display: block !important;
    }

    @media (max-width: 768px) {
      .slick-dots {
        display: none !important;
      }
    }

    .slick-slider {
      justify-content: center;
      margin: 0 2rem !important;
    }

    .slick-prev {
      left: 2px;
      z-index: 1000;
    }
    .slick-next {
      right: 10px !important;
      z-index: 1000 !important;
      @media (min-width: 468px) {
        right: -10px !important;
      }
      @media (max-width: 1069px) {
        right: 14px;
      }
    }

    .image-wrap {
      border-radius: 14px !important;
      /* padding: 1rem !important; */

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
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0);
        @media screen and (max-width: 641px) {
          height: 300px;
        }
        @media screen and (max-width: 468px) {
          height: 200px;
        }
        @media screen and (min-width: 468px) {
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);
        }
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
