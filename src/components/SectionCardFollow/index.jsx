import * as S from "../sharedStyles";
import ShortcutLinks from "../ShortcutLinks";
import followPic from "../../assets/images/rune-social-pic.png";

const SectionCardFollow = () => {
  return (
    <S.SectionCard id="follow-section">
      <ShortcutLinks />
      <S.CardHeader>Follow...</S.CardHeader>
      <S.AboutMeCard>
        <S.ProfilePic>
          <img src={followPic} alt="Social media image" />
        </S.ProfilePic>
        <S.IntroRight>
          <ul>
            <li>
              <a
                href="https://discord.com/users/rUnIcOrN"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/runeunhjem"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/runeunhjem"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="http://www.instagram.com/runeunhjem"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/runeunhjem"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/runeunhjem"
                target="_blank"
                rel="noreferrer"
              >
                X
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/runeunhjem"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
            </li>
          </ul>
          <S.SkillIcons>
            <a
              href="https://discord.com/users/rUnIcOrN"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg"
                alt="Discord icon"
              />
              <span className="visually-hidden">Discord</span>
            </a>
            <a
              href="https://www.facebook.com/runeunhjem"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/facebook.svg"
                alt="Facebook icon"
              />
              <span className="visually-hidden">Facebook</span>
            </a>
            <a
              href="https://www.github.com/runeunhjem"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg"
                alt="GitHub icon"
              />
              <span className="visually-hidden">GitHub</span>
            </a>
            <a
              href="http://www.instagram.com/runeunhjem"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg"
                alt="Instagram icon"
              />
              <span className="visually-hidden">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/runeunhjem"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg"
                alt="LinkedIn icon"
              />
              <span className="visually-hidden">LinkedIn</span>
            </a>
            <a
              href="https://www.twitter.com/runeunhjem"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg"
                alt="Twitter icon"
              />
              <span className="visually-hidden">Twitter</span>
            </a>
            <a
              href="https://www.youtube.com/c/runeunhjem"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/youtube.svg"
                alt="YouTube icon"
              />
              <span className="visually-hidden">YouTube</span>
            </a>
          </S.SkillIcons>
        </S.IntroRight>
      </S.AboutMeCard>
    </S.SectionCard>
  );
};

export default SectionCardFollow;
