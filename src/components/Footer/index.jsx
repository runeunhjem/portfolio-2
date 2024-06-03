import { Link } from "react-router-dom";
import footerLogo from "../../assets/logos/rd-rundev-with-info.svg";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaSpotify,
} from "react-icons/fa";
import * as S from "./index.styled";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.FooterSection>
          <S.FooterLink to="/" end>
            {({ isActive }) => (
              <div className={isActive ? "active-link" : ""}>Home</div>
            )}
          </S.FooterLink>
          <S.FooterLink to="/about">
            {({ isActive }) => (
              <div className={isActive ? "active-link" : ""}>About</div>
            )}
          </S.FooterLink>
          <S.FooterLink to="/contact">
            {({ isActive }) => (
              <div className={isActive ? "active-link" : ""}>Contact</div>
            )}
          </S.FooterLink>
          <S.ExternalLink
            href="https://github.com/runeunhjem/portfolio-2/blob/main/README.md"
            style={{ width: "120px" }}
          >
            README
          </S.ExternalLink>
        </S.FooterSection>
        <S.FooterSection>
          <div className="flex flex-col gap-6">
            <S.ExternalLink href="tel:+4793267611">
              + 47 93 26 76 11
            </S.ExternalLink>
            <S.ExternalLink
              href="https://portfolio1-ca.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio (Old)
            </S.ExternalLink>
            <S.ExternalLink
              href="https://flowcv.com/resume/otcg7cttth"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume / CV
            </S.ExternalLink>
            <S.ExternalLink
              href="mailto:runeunhjem@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              runeunhjem@gmail.com
            </S.ExternalLink>
          </div>
          <div className="hover-icons social-media mb-6 mt-3 flex space-x-4 md:mb-1">
            <S.SocialLink
              href="https://www.linkedin.com/in/rune-unhjem-7b0b4b1b0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <span className="visually-hidden">Visit Rune LinkedIn</span>
            </S.SocialLink>
            <S.SocialLink
              href="https://www.facebook.com/runeunhjem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
              <span className="visually-hidden">Visit Rune Facebook</span>
            </S.SocialLink>
            <S.SocialLink
              href="https://www.instagram.com/runeunhjem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
              <span className="visually-hidden">Visit Rune Instagram</span>
            </S.SocialLink>
            <S.SocialLink
              href="https://github.com/runeunhjem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span className="visually-hidden">Visit Rune GitHub</span>
            </S.SocialLink>
            <S.SocialLink
              href="https://open.spotify.com/artist/56ZSG2Q1JKydX5X9rTZxrq?si=787xAZCQT2yu8PKN5Dhopw&nd=1&dlsi=5c67be9f98204381"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSpotify />
              <span className="visually-hidden">Visit Rune Spotify</span>
            </S.SocialLink>
          </div>
        </S.FooterSection>
        <S.FooterSection>
          <Link to="/">
            <S.Logo src={footerLogo} alt="Illustration of RUNDEV Logo" />
          </Link>
        </S.FooterSection>
      </S.FooterContainer>
      <p>&copy; 2024 Rune Unhjem. All rights reserved.</p>
    </S.FooterWrapper>
  );
};

export default Footer;
