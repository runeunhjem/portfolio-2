import * as S from "../sharedStyles";
import profilePicYoungster from "../../assets/images/rune-profile-pic-youngster.webp";

/**
 * SectionCardHistory component displays a section with personal history and an image.
 *
 * @returns {JSX.Element} The SectionCardHistory component.
 */
const SectionCardHistory = () => {
  return (
    <S.SectionCard>
      <S.CardHeader>History...</S.CardHeader>
      <S.AboutMeCard>
        <S.ProfilePic>
          <img src={profilePicYoungster} alt="Profile picture of young Rune" />
        </S.ProfilePic>
        <S.IntroRight>
          <ul>
            <li>
              <strong>Born</strong> in Sandefjord, Norway, on August 3rd, 1969.
            </li>
            <li>
              <strong>Worked</strong> for 12 years at Elkjøp, mostly as a seller
              and department manager for computers. I gained hands-on experience
              with people, tech, and troubleshooting — skills that still serve
              me well in the digital world.
            </li>
            <li>
              <strong>Created</strong> my first subscription-based website in
              the late &apos;90s, making about 30K NOK/month. Sadly, ISDN phone
              bills were just as high. Still, it gave me a taste for web dev and
              sparked the journey I&apos;m continuing today.
            </li>
            <li>
              <strong>Explored</strong> a lot — from recording an album and
              doing interviews, to running sales departments and building
              customer trust. That variety has helped shape me into a calm,
              reliable problem-solver who thrives on both logic and creativity.
            </li>
            <li>
              <strong>Today</strong>, with 3 years of education behind me — 2 in
              Front-End and 1 in Back-End — I&apos;m proud to call myself a
              fullstack developer, with plenty of life experience to back it up.
            </li>
          </ul>
        </S.IntroRight>
      </S.AboutMeCard>
    </S.SectionCard>
  );
};

export default SectionCardHistory;
