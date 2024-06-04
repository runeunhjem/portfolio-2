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
              needed to produce professional content.
            </li>
            <li>
              Eventually get that perfect job where I can show off my skills.
            </li>
            <li>
              Contribute in all levels of the field within the business that
              chooses me.
            </li>
            <li>
              100% devotion to the company that hires me fulltime, until the day
              I retire.
            </li>
          </ul>
        </S.IntroRight>
      </S.AboutMeCard>
    </S.SectionCard>
  );
};

export default SectionCardGoals;
