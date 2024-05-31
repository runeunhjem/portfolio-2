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
    &:hover {
      transform: scale(1.05);
      color: var(--red-600);
      text-decoration: underline;
    }
  }
`;

export const ProjectCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  .project-count {
    font-size: 1.5rem;
  }
`;
