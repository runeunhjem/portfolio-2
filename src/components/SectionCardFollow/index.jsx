import {
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import * as S from "../sharedStyles";
import ShortcutLinks from "../ShortcutLinks";
import followPic from "../../assets/images/rune-social-pic.webp";

/**
 * SectionCardFollow component displays social media links and an image.
 *
 * @returns {JSX.Element} The SectionCardFollow component.
 */
const SectionCardFollow = () => {
  return (
    <S.SectionCard id="follow-section">
      <ShortcutLinks />
      <S.CardHeader>Follow...</S.CardHeader>
      <S.AboutMeCard>
        <S.ProfilePic>
          <img src={followPic} alt="Social media image" />
        </S.ProfilePic>
        <S.IntroRight className="mx-auto">
          <ul>
            <li className="flex flex-col xs:flex-row">
              <a
                href="https://discord.com/users/rUnIcOrN"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <S.IconContainer>
                  <FaDiscord />
                </S.IconContainer>
                Discord
              </a>
              <span className="whitespace-nowrap">
                &nbsp;|&nbsp;Active in&nbsp;
                <a
                  href="https://discord.gg/F6bqMEqR"
                  target="_blank"
                  rel="noreferrer"
                  className="!text-red-700 hover:text-red-800 hover:underline"
                  style={{ whiteSpace: "nowrap" }}
                >
                  The Coffee Table
                </a>
              </span>
            </li>
            <li className="flex flex-col xs:flex-row">
              <a
                href="https://www.facebook.com/runeunhjem"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <S.IconContainer>
                  <FaFacebookF />
                </S.IconContainer>
                Facebook
              </a>
              &nbsp;| Purely personal
            </li>
            <li className="flex flex-col xs:flex-row">
              <a
                href="https://www.github.com/runeunhjem"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <S.IconContainer>
                  <FaGithub />
                </S.IconContainer>
                GitHub
              </a>
              &nbsp;| Relevant repositories are public
            </li>
            <li className="flex flex-col xs:flex-row">
              <a
                href="http://www.instagram.com/runeunhjem"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <S.IconContainer>
                  <FaInstagram />
                </S.IconContainer>
                Instagram
              </a>
              &nbsp;| Food and family photos
            </li>
            <li className="flex flex-col xs:flex-row">
              <a
                href="https://www.linkedin.com/in/runeunhjem"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <S.IconContainer>
                  <FaLinkedinIn />
                </S.IconContainer>
                LinkedIn
              </a>
              &nbsp;| Career related content
            </li>
            <li className="flex flex-col xs:flex-row">
              <a
                href="https://www.youtube.com/c/runeunhjem"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <S.IconContainer>
                  <FaYoutube />
                </S.IconContainer>
                <span>YouTube</span>
              </a>
              &nbsp;| Private videos and playlists
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
