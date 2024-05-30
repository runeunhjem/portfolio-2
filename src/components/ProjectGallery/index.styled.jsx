import styled from "styled-components";

export const Projects = styled.div`
  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    button {
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;

export const Project = styled.div`
  padding: 1rem;
  background: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  max-width: 300px;

  h3 {
    margin: 1rem 0;
  }

  p {
    margin: 0.5rem 0;
  }

  .carousel-container {
    margin: 1rem 0;
  }

  .carousel-counter {
    margin-bottom: 1rem;
  }

  a {
    display: inline-block;
    margin-top: 1rem;
    color: blue;
    text-decoration: underline;

    &:hover {
      color: darkblue;
    }
  }

  .buttons-container {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;

    button {
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;
