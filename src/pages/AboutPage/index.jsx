import SectionCardNow from "../../components/SectionCardNow";
import SectionCardHistory from "../../components/SectionCardHistory";
import SectionCardGoals from "../../components/SectionCardGoals";
import SectionCardSkills from "../../components/SectionCardSkills";
import SectionCardFollow from "../../components/SectionCardFollow";
import ShortcutLinks from "../../components/ShortcutLinks";
import * as S from "../../components/sharedStyles";

/**
 * AboutPage component displays the sections with detailed information about the user.
 *
 * @returns {JSX.Element} The AboutPage component.
 */
const AboutPage = () => {
  return (
    <div className="about-page-wrapper" style={{ marginTop: "110px" }}>
      <ShortcutLinks />

      <section id="now-section">
        <SectionCardNow />
      </section>

      <S.SectionDivider />

      <section id="history-section">
        <SectionCardHistory />
      </section>

      <S.SectionDivider />

      <section id="goals-section">
        <SectionCardGoals />
      </section>

      <S.SectionDivider />

      <section id="skills-section">
        <SectionCardSkills />
      </section>

      <S.SectionDivider />

      <section id="follow-section">
        <SectionCardFollow />
      </section>
    </div>
  );
};

export default AboutPage;
