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
              <strong>I live</strong> in Harstad, and based in Harstad and sumer
              2025 I graduated from
              <b> Noroff School of Technology and Digital Media</b> after
              completing
              <i> two years of Front-End Development</i> (2024) and
              <i> one year of Back-End Development</i> (2025) - with top grades
              throughout.
            </li>
            <li>
              <strong>Fullstack-ready</strong> and currently seeking exciting
              opportunities — whether in frontend, backend, or fullstack roles.
              I&apos;m also open to tech support or electronics-related jobs in
              the Harstad area.
            </li>
            <li>
              <strong>Passionate</strong> about building intuitive, responsive,
              and well-structured applications. I&apos;ve worked on everything
              from e-commerce platforms to hotel booking systems using tools
              like React, Express, Sequelize, MySQL, Redis, Jest, and more.
            </li>
            <li>
              <strong>Always learning,</strong> improving my skills through
              hands-on projects and staying updated on the latest in web, cloud,
              and AI tech.
            </li>
            <li>
              <strong>Feel free</strong> to reach out — whether you&apos;re
              hiring, collaborating, or just curious about what I do. I&apos;m
              ready for the next chapter.
            </li>
            <li>
              <strong>Outside of tech,</strong> I enjoy cooking, late-night
              movies, hiking to places like Preikestolen and Dronningstien,
              gaming on my PS5, and deep-diving into music, science, or a good
              conspiracy theory.
            </li>
          </ul>
        </S.IntroRight>
      </S.AboutMeCard>
    </S.SectionCard>
  );
};

export default SectionCardNow;
