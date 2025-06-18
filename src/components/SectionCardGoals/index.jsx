import * as S from "../sharedStyles";
import goalsPic from "../../assets/images/rune-goals-pic.webp";

/**
 * SectionCardGoals component displays a section with goals and an image.
 *
 * @returns {JSX.Element} The SectionCardGoals component.
 */
const SectionCardGoals = () => {
  return (
    <S.SectionCard>
      <S.CardHeader>Goals...</S.CardHeader>
      <S.AboutMeCard>
        <S.ProfilePic>
          <img src={goalsPic} alt="Goals picture" />
        </S.ProfilePic>
        <S.IntroRight>
          <ul>
            <li>
              <strong>Right now,</strong> I&apos;m focused on landing that first
              real job after graduating — ideally in web development, but
              I&apos;m also open to other roles where I can apply my tech skills
              and people experience.
            </li>
            <li>
              <strong>I aim</strong> to keep learning and building, whether
              through hands-on projects, freelance work, or upskilling in areas
              like cloud services, automation, or AI-powered tools.
            </li>
            <li>
              <strong>My long-term goal</strong> is to contribute meaningfully
              in a role where I&apos;m trusted, challenged, and encouraged to
              grow — preferably in a team that values both creativity and code
              quality.
            </li>
            <li>
              <strong>Loyalty and dedication</strong> come naturally to me. If a
              company gives me a chance, I will show up, learn fast, solve
              problems, and stick around.
            </li>
            <li>
              <strong>Bonus dream?</strong> Maybe one day start something of my
              own — a service, a tool, a side business. But first, I want to
              contribute to someone else&apos;s success story.
            </li>
          </ul>
        </S.IntroRight>
      </S.AboutMeCard>
    </S.SectionCard>
  );
};

export default SectionCardGoals;
