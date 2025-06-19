import styled from "styled-components";

export const Project = styled.div`
  padding: 0;
  margin: 0 auto !important;
  background: var(--orange-100);
  border-radius: 12px;
  text-align: center;
  overflow: hidden;

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

    /* Custom scrollbar styles */
    &::-webkit-scrollbar {
      width: 8px;
      color: var(--arrows) !important;
      background-color: var(--orange-100) !important;
    }

    &::-webkit-scrollbar-track {
      background: var(--orange-100) !important;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--arrows) !important;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: var(--red-600);
    }

    /* For Firefox / Chrome */
    scrollbar-width: thin;
    scrollbar-color: var(--arrows) var(--orange-100);
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
      width: 100% !important;
      margin: 0 !important;
    }

    .slick-prev {
      left: 2px;
      z-index: 1000;
    }
    .slick-next {
      right: 10px !important;
      z-index: 1000 !important;
      @media (min-width: 469px) {
        right: -12px !important;
      }
      @media (max-width: 1068px) {
        right: 12px !important;
      }
      @media (max-width: 368px) {
        right: 10px !important;
      }
      @media (min-width: 1069px) {
        right: 16px !important;
      }
      @media (min-width: 1340px) {
        right: 18px !important;
      }
      @media (min-width: 1440px) {
        right: 22px !important;
      }
    }

    .image-wrap {
      border-radius: 14px !important;

      img {
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
        /* box-shadow: 4px 4px 8px rgba(0, 0, 0, 0); */
        @media screen and (max-width: 641px) {
          height: 300px;
        }
        @media screen and (max-width: 468px) {
          border: 1px solid var(--stone-400);
          height: 200px;
        }
        @media screen and (min-width: 468px) {
          box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
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

      &.button-pulsemarket {
        background-color: var(--color-brown-pulsemarket);
        color: var(--stone-300);
      }
      &.button-pulsemarket:disabled {
        background-color: var(--color-brown-pulsemarket);
        color: var(--stone-300);
        cursor: not-allowed;
        opacity: 0.5;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
