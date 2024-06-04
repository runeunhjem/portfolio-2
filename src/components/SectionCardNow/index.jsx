import * as S from "../sharedStyles";
import ShortcutLinks from "../ShortcutLinks";
import profilePicMedium from "../../assets/images/rune-profile-pic-medium.png";

const SectionCardNow = () => {
  return (
    <S.SectionCard id="now-section">
      <ShortcutLinks />
      <S.CardHeader>Now...</S.CardHeader>
      <S.AboutMeCard>
        <S.ProfilePic>
          <img src={profilePicMedium} alt="Profile picture of Rune" />
        </S.ProfilePic>
        <S.IntroRight>
          <ul>
            <li>
              I live in Kristiansand with my fiancé, and I have just finished 2
              years as a student of <b>Front End Development</b> at Noroff
              School of Technology and Digital Media with graduation June 2024.
            </li>
            <li>
              I find coding to be highly engaging, and love solving the everyday
              issues that will always occur.
            </li>
            <li>
              Learning every day, hoping to soon join the real world of
              applicable coding.
            </li>
            <li>I am available for hire.</li>
            <li>
              Plan to do one more year of school starting August 2024, this time{" "}
              <b>Backend Development</b>.
            </li>
            <li>
              My spare time goes to a passion for cooking, watching great movies
              and tv-shows, as well as keeping up with all things tech &
              science.
            </li>
          </ul>
        </S.IntroRight>
      </S.AboutMeCard>
    </S.SectionCard>
  );
};

export default SectionCardNow;
