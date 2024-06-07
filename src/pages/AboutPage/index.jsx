import SectionCardNow from "../../components/SectionCardNow";
import SectionCardHistory from "../../components/SectionCardHistory";
import SectionCardGoals from "../../components/SectionCardGoals";
import SectionCardSkills from "../../components/SectionCardSkills";
import SectionCardFollow from "../../components/SectionCardFollow";
import ShortcutLinks from "../../components/ShortcutLinks";

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
      <section id="history-section">
        <SectionCardHistory />
      </section>
      <section id="goals-section">
        <SectionCardGoals />
      </section>
      <section id="skills-section">
        <SectionCardSkills />
      </section>
      <section id="follow-section">
        <SectionCardFollow />
      </section>
    </div>
  );
};

export default AboutPage;
