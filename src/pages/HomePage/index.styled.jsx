import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 868px;
  width: 100%;
`;

export const Heading = styled.h1`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  a {
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.05);
      color: var(--red-600);
    }
  }
`;
