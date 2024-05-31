import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px; /* Add padding for smaller screens */
`;

export const Heading = styled.h1`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  transition: transform 0.3s ease-in-out;

  a {
    transition: transform 0.3s ease-in-out;
    height: 30px;
    &:hover {
      transform: scale(1.05);
      /* color: var(--red-600); */
      /* text-decoration: underline; */
    }
  }
`;

export const ProjectCount = styled.div`
  display: flex;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  gap: 1rem;
  font-weight: 700;

  button {
    width: 100px;
    border-radius: 12px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid transparent;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: var(--red-600);
      box-shadow: none;
      border-bottom: 1px solid var(--red-600);
      transform: scale(1.05)
    }
  }
  .project-count {
    font-size: 1rem;
    font-weight: 700;
  }
`;
