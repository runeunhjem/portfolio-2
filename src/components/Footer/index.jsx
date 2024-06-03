import { Link, NavLink } from "react-router-dom";
import footerLogo from "../../assets/logos/rd-rundev-with-info.svg";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaSpotify,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-orange-100 pb-8 text-center text-stone-600"
      style={{ width: "100%" }}
    >
      <div
        style={{
          boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.6)",
          margin: "2rem auto",
          width: "92vw",
          maxWidth: "1160px",
        }}
        className="footer-container flex justify-between px-10 py-8"
      >
        <div className="footer-left flex w-1/3 flex-col justify-between !py-2">
          <NavLink
            exact
            to="/"
            className={({ isActive }) =>
              isActive ? "hover-links active-link" : "hover-links"
            }
            style={{
              width: "120px",
              boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.6)",
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "hover-links active-link" : "hover-links"
            }
            style={{
              width: "120px",
              boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.6)",
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "hover-links active-link" : "hover-links"
            }
            style={{
              width: "120px",
              boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.6)",
            }}
          >
            Contact
          </NavLink>
          <a
            href="https://github.com/runeunhjem/portfolio-2/blob/main/README.md"
            className="hover-links"
            style={{
              width: "120px",
              boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.6)",
            }}
          >
            README
          </a>
        </div>
        <div className="footer-middle flex w-1/3 flex-col items-center justify-between">
          <div className="flex h-full flex-col items-center justify-between">
            <a
              className="hover-links info-links"
              href="tel:+4793267611"
              target="_blank"
            >
              + 47 93 26 76 11
            </a>
            <a
              className="hover-links info-links"
              href="https://portfolio1-ca.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio (Old)
            </a>
            <a
              className="hover-links info-links"
              href="https://flowcv.com/resume/otcg7cttth"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume / CV
            </a>
            <a
              className="hover-links info-links"
              href="mailto:runeunhjem@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              runeunhjem@gmail.com
            </a>
          </div>
          <div className="hover-icons social-media mt-3 flex space-x-4">
            <a
              href="https://www.linkedin.com/in/rune-unhjem-7b0b4b1b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-stone-500 p-2 text-orange-100 hover:bg-red-600"
            >
              <FaLinkedin size={30} />
              <span className="hidden">Visit Rune LinkedIn</span>
            </a>
            <a
              href="https://www.facebook.com/runeunhjem"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-stone-500 p-2 text-orange-100 hover:bg-red-600"
            >
              <FaFacebook size={30} />
              <span className="hidden">Visit Rune Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/runeunhjem/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-stone-500 p-2 text-orange-100 hover:bg-red-600"
            >
              <FaInstagram size={30} />
              <span className="hidden">Visit Rune Instagram</span>
            </a>
            <a
              href="https://github.com/runeunhjem/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-stone-500 p-2 text-orange-100 hover:bg-red-600"
            >
              <FaGithub size={30} />
              <span className="hidden">Visit Rune GitHub</span>
            </a>
            <a
              href="https://open.spotify.com/artist/56ZSG2Q1JKydX5X9rTZxrq?si=787xAZCQT2yu8PKN5Dhopw&nd=1&dlsi=5c67be9f98204381"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-stone-500 p-2 text-orange-100 hover:bg-red-600"
            >
              <FaSpotify size={30} />
              <span className="hidden">Visit Rune Spotify</span>
            </a>
          </div>
        </div>
        <div className="footer-right flex w-1/3 flex-col items-end">
          <Link to="/">
            <img
              src={footerLogo}
              alt="Illustration of RUNDEV Logo"
              className="footer-logo flex w-60 justify-end"
            />
          </Link>
        </div>
      </div>
      <p>&copy; 2024 Rune Unhjem. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
