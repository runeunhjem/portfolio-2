import * as S from "../sharedStyles";
import ShortcutLinks from "../ShortcutLinks";
import skillsPic from "../../assets/images/rune-skills-pic.webp";
// import skillsPic from "../../assets/images/rune-skills-pic.png";

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
            <li>
              <strong>Photoshop</strong> since the late &apos;90&apos;s:
              Advanced skills in graphic design and image editing.
            </li>
            <li>
              <strong>Figma</strong> for design and prototyping: Expertise in
              creating wireframes, mockups, and interactive prototypes.
            </li>
            <li>
              <strong>WordPress with WooCommerce</strong>: Experienced in
              building and managing e-commerce websites.
            </li>
            <li>
              <strong>Visual Studio Code (VSC)</strong>: Experienced in using
              VSC for coding, debugging, and version control.
            </li>
            <li>
              <strong>HTML 5</strong>: Strong foundation in semantic HTML and
              web accessibility standards.
            </li>
            <li>
              <strong>CSS 3 & SCSS</strong>: Advanced knowledge in styling,
              responsive design, and pre-processing with SCSS.
            </li>
            <li>
              <strong>Sass</strong>: Skilled in writing efficient, maintainable
              CSS using Sass.
            </li>
            <li>
              <strong>JavaScript</strong>: Experienced in vanilla JavaScript,
              ES6+, and asynchronous programming.
            </li>
            <li>
              <strong>Bootstrap</strong>: Experienced in using Bootstrap for
              quick and responsive UI development.
            </li>
            <li>
              <strong>Vite</strong>: Proficient in using Vite for efficient and
              optimized development builds.
            </li>
            <li>
              <strong>React</strong>: Experienced in building dynamic and
              interactive web applications using React.
            </li>
            <li>
              <strong>Tailwind CSS</strong>: Experienced in using Tailwind for
              utility-first CSS styling and rapid prototyping.
            </li>
          </ul>
          <S.SkillIcons>
            <a
              href="https://www.adobe.com/uk/products/photoshop.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg"
                alt="Illustration of the Photoshop icon"
              />
              <span className="visually-hidden">Photoshop</span>
            </a>
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                alt="Illustration of the Figma icon"
              />
              <span className="visually-hidden">Figma</span>
            </a>
            <a href="https://wordpress.com/" target="_blank" rel="noreferrer">
              <img
                src="https://skillicons.dev/icons?i=wordpress"
                alt="Illustration of the WordPress icon"
              />
              <span className="visually-hidden">WordPress</span>
            </a>
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://skillicons.dev/icons?i=vscode"
                alt="Illustration of the VSC icon"
              />
              <span className="visually-hidden">VSC</span>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                alt="Illustration of the HTML5 icon"
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
                alt="Illustration of the CSS3 icon"
              />
              <span className="visually-hidden">CSS3</span>
            </a>
            <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
                alt="Illustration of the Sass icon"
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
                alt="Illustration of the JavaScript icon"
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
                alt="Illustration of the Bootstrap icon"
              />
              <span className="visually-hidden">Bootstrap</span>
            </a>
            <a href="https://vite.org/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg"
                alt="Illustration of the Vite icon"
              />
              <span className="visually-hidden">Vite</span>
            </a>
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                alt="Illustration of the React icon"
              />
              <span className="visually-hidden">React</span>
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                alt="Illustration of the Tailwind CSS icon"
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
