import * as S from "../sharedStyles";
import ShortcutLinks from "../ShortcutLinks";
import goalsPic from "../../assets/images/rune-goals-pic.png";

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
              My main goal at the moment is to acquire the skills and experience
              needed to produce professional content. I am focused on mastering
              the latest technologies and best practices in web development.
            </li>
            <li>
              Eventually get that perfect job where I can show off my skills. I
              aim to work in a dynamic and innovative environment where I can
              continuously learn and contribute.
            </li>
            <li>
              Contribute in all levels of the field within the business that
              chooses me. I am keen on collaborating with cross-functional teams
              to deliver exceptional products and solutions.
            </li>
            <li>
              100% devotion to the company that hires me full-time, until the
              day I retire. I am committed to professional growth and long-term
              success, both for myself and the organization I join.
            </li>
          </ul>
        </S.IntroRight>
      </S.AboutMeCard>
    </S.SectionCard>
  );
};

export default SectionCardGoals;
