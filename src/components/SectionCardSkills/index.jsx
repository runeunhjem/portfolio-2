import * as S from "../sharedStyles";
import ShortcutLinks from "../ShortcutLinks";
import skillsPic from "../../assets/images/rune-skills-pic.png";

const SectionCardSkills = () => {
  return (
    <S.SectionCard id="skills-section">
      <ShortcutLinks />
      <S.CardHeader>Skills...</S.CardHeader>
      <S.AboutMeCard>
        <S.ProfilePic>
          <img src={skillsPic} alt="Skills picture" />
        </S.ProfilePic>
        <S.IntroRight>
          <ul>
            <li>Photoshop since the late &apos;90&apos;s</li>
            <li>Figma for design and prototyping</li>
            <li>WordPress with WooCommerce</li>
            <li>Visual Studio Code (VSC)</li>
            <li>HTML 5</li>
            <li>CSS 3 & SCSS</li>
            <li>Sass</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>Vite</li>
            <li>React</li>
            <li>Tailwind CSS</li>
          </ul>
          <S.SkillIcons>
            <a
              href="https://www.adobe.com/uk/products/photoshop.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg"
                alt="Photoshop"
              />
              <span className="visually-hidden">Photoshop</span>
            </a>
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                alt="Figma"
              />
              <span className="visually-hidden">Figma</span>
            </a>
            <a href="https://wordpress.com/" target="_blank" rel="noreferrer">
              <img
                src="https://skillicons.dev/icons?i=wordpress"
                alt="WordPress"
              />
              <span className="visually-hidden">WordPress</span>
            </a>
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://skillicons.dev/icons?i=vscode" alt="VSC" />
              <span className="visually-hidden">VSC</span>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                alt="HTML5"
              />
              <span className="visually-hidden">HTML5</span>
            </a>
            <a
              href="https://www.w3.org/TR/CSS/#css"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                alt="CSS3"
              />
              <span className="visually-hidden">CSS3</span>
            </a>
            <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
                alt="Sass"
              />
              <span className="visually-hidden">Sass</span>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                alt="JavaScript"
              />
              <span className="visually-hidden">JavaScript</span>
            </a>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                alt="Bootstrap"
              />
              <span className="visually-hidden">Bootstrap</span>
            </a>
            <a href="https://vite.org/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg"
                alt="Vite"
              />
              <span className="visually-hidden">Vite</span>
            </a>
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                alt="React"
              />
              <span className="visually-hidden">React</span>
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                alt="Tailwind CSS"
              />
              <span className="visually-hidden">Tailwind CSS</span>
            </a>
          </S.SkillIcons>
        </S.IntroRight>
      </S.AboutMeCard>
    </S.SectionCard>
  );
};

export default SectionCardSkills;
