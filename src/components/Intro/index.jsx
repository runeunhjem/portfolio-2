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
            <b>I&apos;m</b> based in Kristiansand and have just completed a
            3-year journey at{" "}
            <strong>Noroff School of Technology and Digital Media</strong>{" "}
            &mdash; two years of <i>Front-End Development</i> and one year of{" "}
            <i>Back-End Development</i>, finishing with top grades.
          </p>
          <p>
            <b>I&apos;m</b> now looking for opportunities as a frontend,
            backend, or fullstack developer &mdash; and open to roles in tech
            support or electronics too.
          </p>
          <p>
            <b>Feel</b> free to check out my projects or visit the about section
            to learn more.
          </p>
          <Link to="/about" style={{ display: "flex", width: "fit-content" }}>
            <S.HighlightText>
              About section <FaArrowRight />
            </S.HighlightText>
          </Link>
        </S.AllText>
        <S.InitialText>
          <p>
            <b>Hi</b> there and welcome. I&apos;m based in Kristiansand and
            recently completed 3 years at{" "}
            <strong>Noroff School of Technology and Digital Media</strong>{" "}
            &mdash; studying <i>Front-End</i> and <i>Back-End Development</i>.
          </p>
        </S.InitialText>
      </S.FlexContainer>
      <S.IntroTextContainer>
        <S.RemainingText>
          <p>
            <b>I&apos;m</b> now exploring job opportunities where I can put my
            fullstack skills to use &mdash; or help with tech support,
            electronics, or hands-on problem solving.
          </p>
          <p>
            <b>Feel</b> free to explore my projects or get to know me better in
            the about section.
          </p>
          <Link to="/about">
            <S.HighlightText>
              About section <FaArrowRight />
            </S.HighlightText>
          </Link>
        </S.RemainingText>
      </S.IntroTextContainer>
    </S.IntroSection>
  );
};


export default Intro;
