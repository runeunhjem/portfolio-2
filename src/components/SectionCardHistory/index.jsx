import * as S from "../sharedStyles";
import ShortcutLinks from "../ShortcutLinks";
import profilePicYoungster from "../../assets/images/rune-profile-pic-youngster.webp";
// import profilePicYoungster from "../../assets/images/rune-profile-pic-youngster.png";

const SectionCardHistory = () => {
  return (
    <S.SectionCard id="history-section">
      <ShortcutLinks />
      <S.CardHeader>History...</S.CardHeader>
      <S.AboutMeCard>
        <S.ProfilePic>
          <img src={profilePicYoungster} alt="Profile picture of young Rune" />
        </S.ProfilePic>
        <S.IntroRight>
          <ul>
            <li>Born in Sandefjord 03 August 1969.</li>
            <li>
              After 12 years at Elkjøp, I decided it was time for a career
              change, and I have always loved everything tech and science. My
              journey from retail to tech has equipped me with valuable skills
              in customer service, sales, and team management.
            </li>
            <li>
              I made my first real subscription based website back in the late
              &apos;90&apos;s, and made an average of 30K NOK/month.
              Unfortunately that was just about what the ISDN phone bill was as
              well every month, so it did not last too long. This experience
              taught me early lessons in web development and the importance of
              sustainable business models.
            </li>
            <li>
              I&apos;ve made a music album available on Spotify, done sales,
              interviews and for many years seller and department manager,
              computers at Elkjøp Ålesund. These diverse experiences have
              enriched my problem-solving skills and adaptability.
            </li>
          </ul>
        </S.IntroRight>
      </S.AboutMeCard>
    </S.SectionCard>
  );
};

export default SectionCardHistory;
