import * as S from "../sharedStyles";
import profilePicMedium from "../../assets/images/rune-profile-pic-medium.webp";

/**
 * SectionCardNow component displays a section with current personal information and an image.
 *
 * @returns {JSX.Element} The SectionCardNow component.
 */
const SectionCardNow = () => {
  return (
    <S.SectionCard>
      <S.CardHeader>Now...</S.CardHeader>
      <S.AboutMeCard>
        <S.ProfilePic>
          <img src={profilePicMedium} alt="Profile picture of Rune" />
        </S.ProfilePic>
        <S.IntroRight>
          <ul>
            <li>
              <strong>I live</strong> in Kristiansand with my fiancé, and I have
              just finished 2 years as a student of{" "}
              <b>
                <i>Front End Development</i>
              </b>{" "}
              at Noroff School of Technology and Digital Media with graduation
              June 2024.
            </li>
            <li>
              <strong>Coding</strong> and design is to me highly engaging, and I
              love solving the everyday issues that will always occur. I am
              particularly interested in creating beautiful, user-friendly, and
              responsive web applications.
            </li>
            <li>
              <strong>Still</strong> learning every day, and hope to soon join
              the real world of applicable coding and design. I am continuously
              improving my skills through online courses and personal projects.
            </li>
            <li>
              <strong>Don&apos;t</strong> hesitate to reach out if you like what
              you see. I am available for hire and eager to contribute to
              innovative projects.
            </li>
            <li>
              <strong>Plan</strong> to do one more year of school starting
              August 2024, this time{" "}
              <b>
                <i>Back-End Development</i>
              </b>
              . I believe having a full-stack skill set will allow me to
              understand and tackle a wider range of challenges in web
              development.
            </li>
            <li>
              <strong>My</strong> spare time goes to a passion for cooking,
              watching great movies and tv-shows, as well as keeping up with all
              things tech and science. I also enjoy gaming a bit on my PS5,
              bathing in the summer, hiking to well-known tourist attractions
              like Dronningstien or places like Preikestolen.
            </li>
          </ul>
        </S.IntroRight>
      </S.AboutMeCard>
    </S.SectionCard>
  );
};

export default SectionCardNow;
