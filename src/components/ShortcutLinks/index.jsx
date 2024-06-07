import { useState, useEffect } from "react";
import * as S from "./index.styled";

/**
 * ShortcutLinks component displays a set of links for navigating to different sections of the page.
 *
 * @returns {JSX.Element} The ShortcutLinks component.
 */
const ShortcutLinks = () => {
  const [activeSection, setActiveSection] = useState("top");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "top"; // Default to "top" if no sections are in view

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY - 125; // Adjust for sticky header height
      const sectionHeight = section.clientHeight;
      const sectionBottom = sectionTop + sectionHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check when component mounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTopClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("top");
  };

  return (
    <S.ShortcutLinks>
      <S.ShortcutLink
        href="#"
        onClick={handleTopClick}
        className={activeSection === "top" ? "active" : ""}
      >
        Top
      </S.ShortcutLink>
      |
      <S.ShortcutLink
        href="#now-section"
        className={activeSection === "now-section" ? "active" : ""}
      >
        Now
      </S.ShortcutLink>
      |
      <S.ShortcutLink
        href="#history-section"
        className={activeSection === "history-section" ? "active" : ""}
      >
        History
      </S.ShortcutLink>
      |
      <S.ShortcutLink
        href="#goals-section"
        className={activeSection === "goals-section" ? "active" : ""}
      >
        Goals
      </S.ShortcutLink>
      |
      <S.ShortcutLink
        href="#skills-section"
        className={activeSection === "skills-section" ? "active" : ""}
      >
        Skills
      </S.ShortcutLink>
      |
      <S.ShortcutLink
        href="#follow-section"
        className={activeSection === "follow-section" ? "active" : ""}
      >
        Follow
      </S.ShortcutLink>
    </S.ShortcutLinks>
  );
};

export default ShortcutLinks;
