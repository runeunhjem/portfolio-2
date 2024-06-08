import { useState, useEffect } from "react";
import * as S from "./index.styled";

/**
 * ShortcutLinks component displays a set of links for navigating to different sections of the page.
 *
 * @returns {JSX.Element} The ShortcutLinks component.
 */
const ShortcutLinks = () => {
  const [activeSection, setActiveSection] = useState("top");
  const headerHeight = 113;
  const shortcutLinksHeight = 75;

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let closestSection = "top";
    let minDistance = Infinity;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionMiddle = rect.top + rect.height / 2;
      const adjustedViewportCenter = window.innerHeight / 2 + headerHeight / 2;
      const distance = Math.abs(sectionMiddle - adjustedViewportCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestSection = section.getAttribute("id");
      }
    });

    setActiveSection(closestSection);
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

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    const offset = headerHeight + shortcutLinksHeight; // Total height to offset
    const sectionTop = section.offsetTop - offset;
    window.scrollTo({ top: sectionTop, behavior: "smooth" });
    setActiveSection(sectionId.slice(1));
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
        onClick={(e) => handleSectionClick(e, "#now-section")}
        className={activeSection === "now-section" ? "active" : ""}
      >
        Now
      </S.ShortcutLink>
      |
      <S.ShortcutLink
        href="#history-section"
        onClick={(e) => handleSectionClick(e, "#history-section")}
        className={activeSection === "history-section" ? "active" : ""}
      >
        History
      </S.ShortcutLink>
      |
      <S.ShortcutLink
        href="#goals-section"
        onClick={(e) => handleSectionClick(e, "#goals-section")}
        className={activeSection === "goals-section" ? "active" : ""}
      >
        Goals
      </S.ShortcutLink>
      |
      <S.ShortcutLink
        href="#skills-section"
        onClick={(e) => handleSectionClick(e, "#skills-section")}
        className={activeSection === "skills-section" ? "active" : ""}
      >
        Skills
      </S.ShortcutLink>
      |
      <S.ShortcutLink
        href="#follow-section"
        onClick={(e) => handleSectionClick(e, "#follow-section")}
        className={activeSection === "follow-section" ? "active" : ""}
      >
        Follow
      </S.ShortcutLink>
    </S.ShortcutLinks>
  );
};

export default ShortcutLinks;
