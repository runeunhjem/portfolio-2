import SectionCardNow from "../../components/SectionCardNow";
import SectionCardHistory from "../../components/SectionCardHistory";
import SectionCardGoals from "../../components/SectionCardGoals";
import SectionCardSkills from "../../components/SectionCardSkills";
import SectionCardFollow from "../../components/SectionCardFollow";

/**
 * AboutPage component displays the sections with detailed information about the user.
 *
 * @returns {JSX.Element} The AboutPage component.
 */
const AboutPage = () => {
  return (
    <div>
      <SectionCardNow />
      <SectionCardHistory />
      <SectionCardGoals />
      <SectionCardSkills />
      <SectionCardFollow />
    </div>
  );
};

export default AboutPage;
