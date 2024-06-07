import * as S from "../sharedStyles";
import ShortcutLinks from "../ShortcutLinks";
import goalsPic from "../../assets/images/rune-goals-pic.webp";

/**
 * SectionCardGoals component displays a section with goals and an image.
 *
 * @returns {JSX.Element} The SectionCardGoals component.
 */
const SectionCardGoals = () => {
  return (
    <S.SectionCard id="goals-section">
      <ShortcutLinks />
      <S.CardHeader>Goals...</S.CardHeader>
      <S.AboutMeCard>
        <S.ProfilePic>
          <img src={goalsPic} alt="Goals picture" />
        </S.ProfilePic>
        <S.IntroRight>
          <ul>
            <li>
              <strong>My</strong> main goal at the moment is to acquire the
              skills and experience needed to produce professional content. I am
              focused on mastering the latest technologies and best practices in
              web development.
            </li>
            <li>
              <strong>Eventually</strong> get that perfect job where I can show
              off my skills. I aim to work in a dynamic and innovative
              environment where I can continuously learn and contribute.
            </li>
            <li>
              <strong>Contribute</strong> in all levels of the field within the
              business that chooses me. I am keen on collaborating with
              cross-functional teams to deliver exceptional products and
              solutions.
            </li>
            <li>
              <strong>100% devotion</strong> to the company that hires me
              full-time, until the day I retire. I am committed to professional
              growth and long-term success, both for myself and the organization
              I join.
            </li>
          </ul>
        </S.IntroRight>
      </S.AboutMeCard>
    </S.SectionCard>
  );
};

export default SectionCardGoals;
