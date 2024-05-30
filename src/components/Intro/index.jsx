import * as S from "./index.styled";
import introImage from "../../assets/images/image-rune-bw.png";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <S.IntroSection>
      <div className="flex flex-wrap sm:flex-col">
        <S.IntroImageContainer>
          <img src={introImage} alt="Illustration of Rune Unhjem" />
        </S.IntroImageContainer>
        <S.AllText>
          Hi there and welcome. Based in Kristiansand, I just finished up a 2
          year study of Front End Development at Noroff School of Technology and
          Digital Media. Take a look at my relevant projects, or if interested,
          get a little more personal information in the about section.
          Don&apos;t hesitate to contact me if you like what you see. I am
          available for hire.{" "}
          <Link to="/about">
            <S.HighlightText>READ ALL ABOUT ME</S.HighlightText>
          </Link>{" "}
        </S.AllText>
        <S.InitialText>
          Hi there and welcome. Based in Kristiansand, I just finished up a 2
          year study of Front End Development at Noroff School of Technology and
          Digital Media.
        </S.InitialText>
      </div>
      <S.IntroTextContainer>
        <S.RemainingText>
          Take a look at my relevant projects, or if interested, get a little
          more personal information in the about section. Don&apos;t hesitate to
          contact me if you like what you see. I am available for hire.{" "}
          <S.HighlightText>READ ALL ABOUT ME</S.HighlightText> Click to go to
          about me.
        </S.RemainingText>
      </S.IntroTextContainer>
    </S.IntroSection>
  );
};

export default Intro;
