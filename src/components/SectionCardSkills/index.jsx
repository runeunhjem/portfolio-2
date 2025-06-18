import * as S from "../sharedStyles";
import skillsPic from "../../assets/images/rune-skills-pic.webp";

/**
 * SectionCardSkills component displays a section with skills information and an image.
 *
 * @returns {JSX.Element} The SectionCardSkills component.
 */
const SectionCardSkills = () => {
  return (
    <S.SectionCard>
      <S.CardHeader>Skills...</S.CardHeader>
      <S.AboutMeCard>
        <S.ProfilePic>
          <img
            src={skillsPic}
            alt="Rune Unhjem in front of a background representing coding and creativity"
          />
        </S.ProfilePic>
        <S.IntroRight>
          <ul>
            <S.SkillListItem>
              <strong>Frontend:</strong> HTML5, CSS3, Sass, JavaScript (ES6+),
              React, Tailwind CSS, Bootstrap, Vite, Figma, Photoshop, WordPress,
              EJS, Responsive Design
              <S.SkillIcons>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                    alt="HTML5 icon"
                  />
                  <span className="visually-hidden">HTML5</span>
                </a>
                <a
                  href="https://www.w3.org/Style/CSS/Overview.en.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                    alt="CSS3 icon"
                  />
                  <span className="visually-hidden">CSS3</span>
                </a>
                <a
                  href="https://sass-lang.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
                    alt="Sass icon"
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
                    alt="JavaScript icon"
                  />
                  <span className="visually-hidden">JavaScript</span>
                </a>
                <a href="https://react.dev/" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                    alt="React icon"
                  />
                  <span className="visually-hidden">React</span>
                </a>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                    alt="Tailwind CSS icon"
                  />
                  <span className="visually-hidden">Tailwind CSS</span>
                </a>
                <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                    alt="Bootstrap icon"
                  />
                  <span className="visually-hidden">Bootstrap</span>
                </a>
                <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg"
                    alt="Vite icon"
                  />
                  <span className="visually-hidden">Vite</span>
                </a>
                <a
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                    alt="Figma icon"
                  />
                  <span className="visually-hidden">Figma</span>
                </a>
                <a
                  href="https://www.adobe.com/products/photoshop.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg"
                    alt="Photoshop icon"
                  />
                  <span className="visually-hidden">Photoshop</span>
                </a>
                <a
                  href="https://wordpress.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://skillicons.dev/icons?i=wordpress"
                    alt="WordPress icon"
                  />
                  <span className="visually-hidden">WordPress</span>
                </a>
                <a href="https://ejs.co/" target="_blank" rel="noreferrer">
                  <img
                    src="https://img.icons8.com/color/512/ejs.png"
                    alt="EJS icon"
                  />
                  <span className="visually-hidden">EJS</span>
                </a>
              </S.SkillIcons>
            </S.SkillListItem>
            <S.SkillListItem>
              <strong>Backend:</strong> Node.js, Express.js, Sequelize, MySQL,
              Redis, JWT authentication, Swagger (OpenAPI)
              <S.SkillIcons>
                <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
                  <img
                    src="https://skillicons.dev/icons?i=nodejs"
                    alt="Node.js icon"
                  />
                  <span className="visually-hidden">Node.js</span>
                </a>
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://skillicons.dev/icons?i=express"
                    alt="Express icon"
                  />
                  <span className="visually-hidden">Express</span>
                </a>
                <a
                  href="https://sequelize.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://skillicons.dev/icons?i=sequelize"
                    alt="Sequelize icon"
                  />
                  <span className="visually-hidden">Sequelize</span>
                </a>
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://skillicons.dev/icons?i=mysql"
                    alt="MySQL icon"
                  />
                  <span className="visually-hidden">MySQL</span>
                </a>
                <a href="https://redis.io/" target="_blank" rel="noreferrer">
                  <img
                    src="https://skillicons.dev/icons?i=redis"
                    alt="Redis icon"
                  />
                  <span className="visually-hidden">Redis</span>
                </a>
                <a href="https://jwt.io/" target="_blank" rel="noreferrer">
                  <img
                    src="https://jwt.io/apple-icon/256?c8286793fc3e08ca"
                    alt="JWT icon"
                    width="40"
                    height="40"
                  />
                  <span className="visually-hidden">JWT</span>
                </a>
                <a href="https://swagger.io/" target="_blank" rel="noreferrer">
                  <img
                    src="https://images.seeklogo.com/logo-png/33/2/swagger-logo-png_seeklogo-338589.png"
                    alt="Swagger icon"
                    width="40"
                    height="40"
                  />
                  <span className="visually-hidden">Swagger</span>
                </a>
              </S.SkillIcons>
            </S.SkillListItem>
            <S.SkillListItem>
              <strong>Tools:</strong> Visual Studio Code, Git, GitHub, Postman,
              Docker, Jest, Supertest
              <S.SkillIcons>
                <a
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://skillicons.dev/icons?i=vscode"
                    alt="Visual Studio Code icon"
                  />
                  <span className="visually-hidden">Visual Studio Code</span>
                </a>
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  <img
                    src="https://skillicons.dev/icons?i=git"
                    alt="Git icon"
                  />
                  <span className="visually-hidden">Git</span>
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <img
                    src="https://skillicons.dev/icons?i=github"
                    alt="GitHub icon"
                  />
                  <span className="visually-hidden">GitHub</span>
                </a>
                <a
                  href="https://www.postman.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://skillicons.dev/icons?i=postman"
                    alt="Postman icon"
                  />
                  <span className="visually-hidden">Postman</span>
                </a>
                <a
                  href="https://www.docker.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://skillicons.dev/icons?i=docker"
                    alt="Docker icon"
                  />
                  <span className="visually-hidden">Docker</span>
                </a>
                <a href="https://jestjs.io/" target="_blank" rel="noreferrer">
                  <img
                    src="https://skillicons.dev/icons?i=jest"
                    alt="Jest icon"
                  />
                  <span className="visually-hidden">Jest</span>
                </a>
                <a
                  href="https://github.com/visionmedia/supertest"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.checkops.com/content/images/2024/10/8NFh404p_400x400-1.jpg"
                    alt="Supertest icon"
                    width="40"
                    height="40"
                  />
                  <span className="visually-hidden">Supertest</span>
                </a>
              </S.SkillIcons>
            </S.SkillListItem>
            <S.SkillListItem>
              <strong>Other:</strong> REST APIs, accessibility (WCAG/ARIA),
              deployment (Netlify, Render)
              <S.SkillIcons>
                <a
                  href="https://restfulapi.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_CvWdyQiIUOMvI208iJGa-yGC92g3szRKw&s"
                    alt="REST API icon"
                    width="40"
                    height="40"
                  />
                  <span className="visually-hidden">REST API</span>
                </a>
                <a
                  href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPQT2T9QHaFcLANweZVG2ixlfmAB5r7P5qA&s"
                    alt="WCAG/ARIA icon"
                    width="40"
                    height="40"
                  />
                  <span className="visually-hidden">WCAG/ARIA</span>
                </a>
                <a
                  href="https://www.netlify.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://skillicons.dev/icons?i=netlify"
                    alt="Netlify icon"
                  />
                  <span className="visually-hidden">Netlify</span>
                </a>
                <a href="https://render.com/" target="_blank" rel="noreferrer">
                  <img
                    src="https://pbs.twimg.com/profile_images/1735429515541938176/zOO1N7Su_400x400.jpg"
                    alt="Render icon"
                  />
                  <span className="visually-hidden">Render</span>
                </a>
              </S.SkillIcons>
            </S.SkillListItem>
          </ul>
        </S.IntroRight>
      </S.AboutMeCard>
    </S.SectionCard>
  );
};

export default SectionCardSkills;
