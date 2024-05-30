import styled from "styled-components";

export const IntroSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
  flex-wrap: wrap;

  @media (max-width: 469px) {
    flex-direction: column;
  }
`;

export const IntroImageContainer = styled.div`
  width: 25%;
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }

  @media (max-width: 640px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const InitialText = styled.div`
  display: none;
  padding-left: 20px;
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--stone-600);
  width: 75%;

  @media (max-width: 640px) {
    display: block;
    width: 100%;
    padding-left: 0;
    margin-bottom: 10px;
  }
`;

export const IntroTextContainer = styled.div`
  width: 100%;
  padding-left: 20px;
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--stone-600);

  @media (max-width: 640px) {
    padding-left: 0;
  }
`;

export const RemainingText = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: block;
  }
`;

export const HighlightText = styled.span`
  font-weight: bold;
  color: var(--red-600);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const AllText = styled.div`
  display: none;
  width: 75%;
  padding-left: 20px;
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--stone-600);

  @media (min-width: 641px) {
    display: block;
  }
`;
