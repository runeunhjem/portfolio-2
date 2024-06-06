import * as S from "../sharedStyles";
import ShortcutLinks from "../ShortcutLinks";
import profilePicMedium from "../../assets/images/rune-profile-pic-medium.webp";

/**
 * SectionCardNow component displays a section with current personal information and an image.
 *
 * @returns {JSX.Element} The SectionCardNow component.
 */
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
              issues that will always occur. I am particularly interested in
              creating user-friendly, responsive web applications.
            </li>
            <li>
              Learning every day, hoping to soon join the real world of
              applicable coding. I am continuously improving my skills through
              online courses and personal projects.
            </li>
            <li>
              I am available for hire and eager to contribute to innovative
              projects.
            </li>
            <li>
              Plan to do one more year of school starting August 2024, this time{" "}
              <b>Backend Development</b>. I believe having a full-stack skill
              set will allow me to understand and tackle a wider range of
              challenges in web development.
            </li>
            <li>
              My spare time goes to a passion for cooking, watching great movies
              and tv-shows, as well as keeping up with all things tech &
              science. I also enjoy participating in tech communities and
              hackathons.
            </li>
          </ul>
        </S.IntroRight>
      </S.AboutMeCard>
    </S.SectionCard>
  );
};

export default SectionCardNow;
