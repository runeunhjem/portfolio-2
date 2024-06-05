import styled from "styled-components";

export const IntroSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 20px;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
`;

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: nowrap;

  @media (max-width: 468px) {
    flex-wrap: wrap;
  }
`;

export const IntroImageContainer = styled.div`
  width: 33%;
  justify-content: center;
  img {
    max-width: 100%;
    width: 250px;
    height: auto;
    border-radius: 50%;
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 368px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const InitialText = styled.div`
  display: none;
  width: 67%;
  padding-left: 20px;
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--stone-600);

  @media (max-width: 640px) {
    display: block;
  }
  @media (max-width: 468px) {
    width: 100%;
    padding-left: 0;
    margin-bottom: 10px;
    min-height: 200px;
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
    flex-direction: column;
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
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const AllText = styled.div`
  display: none;
  width: 67%;
  padding-left: 20px;
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--stone-600);
  @media (min-width: 641px) {
    min-height: 200px;
    display: block;
  }
`;
