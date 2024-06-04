import * as S from "./index.styled";
import introImage from "../../assets/images/rune-profile-pic-medium.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Intro = () => {
  return (
    <S.IntroSection>
      <S.FlexContainer>
        <S.IntroImageContainer>
          <img src={introImage} alt="Illustration of Rune Unhjem" />
        </S.IntroImageContainer>
        <S.AllText>
          <p>Hi there and welcome.</p>
          <p>
            Based in Kristiansand, I just finished up a 2 year study of{" "}
            <strong>Frontend Development</strong> at Noroff School of
            Technology and Digital Media, and have signed up for a 1 year study of{" "}
            <strong>Backend Development</strong> from August &apos;24.
          </p>
          <p>
            Take a look at my relevant projects, or if interested, get a little
            more personal information in the about section.
          </p>
          <p>Don&apos;t hesitate to contact me if you like what you see.</p>
          <p>I am available for hire.</p>
          <Link to="/about">
            <S.HighlightText>
              About section <FaArrowRight />
            </S.HighlightText>
          </Link>{" "}
        </S.AllText>
        <S.InitialText>
          <p>
            Hi there and welcome. Based in Kristiansand, I just finished up a 2
            year study of <strong>Frontend Development</strong> at Noroff
            School of Technology and Digital Media, and have signed up for a 1 year study of{" "}
            <strong>Backend Development</strong> from August &apos;24.
          </p>
        </S.InitialText>
      </S.FlexContainer>
      <S.IntroTextContainer>
        <S.RemainingText>
          <p>
            Take a look at my relevant projects, or if interested, get a little
            more personal information in the about section.
          </p>
          <p>Don&apos;t hesitate to contact me if you like what you see.</p>
          <p>I am available for hire. </p>
          <Link to="/about">
            <S.HighlightText>
              About section
              <FaArrowRight />
            </S.HighlightText>
          </Link>{" "}
        </S.RemainingText>
      </S.IntroTextContainer>
    </S.IntroSection>
  );
};

export default Intro;
