import * as S from "./index.styled";
import introImage from "../../assets/images/rune-profile-pic-medium.webp";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

/**
 * Intro component displaying an introduction message and an image.
 * @returns {JSX.Element} The Intro component.
 */
const Intro = () => {
  return (
    <S.IntroSection>
      <S.FlexContainer>
        <S.IntroImageContainer>
          <img src={introImage} alt="Illustration of Rune Unhjem" />
        </S.IntroImageContainer>
        <S.AllText>
          <p>
            <b>Hi</b> there and welcome.
          </p>
          <p>
            <b>Based</b> in Kristiansand, I just finished up a 2 year study of{" "}
            <strong>
              <i>Front-End Development</i>
            </strong>{" "}
            at Noroff School of Technology and Digital Media, and have signed up
            for a 1 year study of{" "}
            <strong>
              <i>Back-End Development</i>
            </strong>{" "}
            from August &apos;24.
          </p>
          <p>
            <b>Take</b> a look at my relevant projects, or if interested, get a
            little more personal information in the about section.
          </p>
          <p>
            <b>Don&apos;t</b> hesitate to contact me if you like what you see.
          </p>
          <Link to="/about" style={{ display: "flex", width: "fit-content" }}>
            <S.HighlightText>
              About section <FaArrowRight />
            </S.HighlightText>
          </Link>{" "}
        </S.AllText>
        <S.InitialText>
          <p>
            <b>Hi</b> there and welcome. Based in Kristiansand, I just finished
            up a 2 year study of{" "}
            <strong>
              <i>Front-End Development</i>
            </strong>{" "}
            at Noroff School of Technology and Digital Media, and have signed up
            for a 1 year study of{" "}
            <strong>
              <i>Back-End Development</i>
            </strong>{" "}
            from August &apos;24.
          </p>
        </S.InitialText>
      </S.FlexContainer>
      <S.IntroTextContainer>
        <S.RemainingText>
          <p>
            <b>Take</b> a look at my relevant projects, or if interested, get a
            little more personal information in the about section.
          </p>
          <p>
            <b>Don&apos;t</b> hesitate to contact me if you like what you see.
          </p>
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
