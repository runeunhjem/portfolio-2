import styled from "styled-components";

export const SectionCard = styled.section`
  width: 1200px;
  max-width: 90%;
  margin: 2rem auto;
  padding: 1rem;
  background-color: var(--orange-100);
  border-radius: 8px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
`;

export const CardHeader = styled.h2`
  font-size: 2.5rem;
  font-style: italic;
  font-weight: 500;
  margin-bottom: 1rem;
  color: var(--stone-600);
  text-align: center;
`;

export const AboutMeCard = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProfilePic = styled.div`
  flex: 0 0 30%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  img {
    max-width: 300px;
    width: 100%;
    border-radius: 50%;
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.4);
  }
`;

export const IntroRight = styled.div`
  flex: 1;
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 0.5rem;
    color: var(--stone-600);
  }
  a.social-link {
    display: flex;
    align-items: center;
    color: var(--stone-600);
    text-decoration: none;
    width: 100px;
    &:hover {
      text-decoration: underline;
      color: var(--red-600);
      svg {
        transform: scale(1.2);
        text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.4);
      }
    }
  }
`;

export const IconContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const SkillIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  a {
    display: inline-block;
    img {
      width: 40px;
      height: 40px;
      transition:
        transform 0.2s ease-in-out,
        text-shadow 0.2s ease-in-out;
      &:hover {
        transform: scale(1.1);
        text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.4);
      }
    }
    span {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }
  }
`;
