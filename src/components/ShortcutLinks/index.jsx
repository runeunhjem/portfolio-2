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

  /**
   * Handles the scroll event to update the active link based on the section in view.
   */
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
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * Handles the click event for the "Top" link, scrolling the page to the top.
   * @param {React.MouseEvent} e - The click event.
   */
  const handleTopClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("top");
  };

  /**
   * Handles the click event for section links, scrolling the page to the specified section.
   * @param {React.MouseEvent} e - The click event.
   * @param {string} sectionId - The ID of the section to scroll to.
   */
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    const offset = headerHeight + shortcutLinksHeight;
    const sectionTop = section.offsetTop - offset;
    window.scrollTo({ top: sectionTop, behavior: "smooth" });
    setActiveSection(sectionId.slice(1));
  };

  return (
    <S.ShortcutLinksWrapper>
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
    </S.ShortcutLinksWrapper>
  );
};

export default ShortcutLinks;
