import { forwardRef, useEffect } from "react";
import Slider from "react-slick";
import {
  addAriaLabels,
  updateFocusableElements,
} from "../../utilities/accessibilityUtils";
import * as S from "./index.styled";
import projectsData from "./projectsData";
import ProjectCard from "../ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * ProjectGallery component that displays a gallery of projects using a slider.
 *
 * @param {Object} _props - The component props.
 * @param {React.Ref} ref - The ref to be forwarded to the slider component.
 * @returns {JSX.Element} The ProjectGallery component.
 */
const ProjectGallery = forwardRef((_props, ref) => {
  useEffect(() => {
    addAriaLabels();
    updateFocusableElements();

    // Add aria-hidden to cloned slides
    const clonedSlides = document.querySelectorAll(".slick-cloned");
    clonedSlides.forEach((slide) => {
      slide.setAttribute("aria-hidden", "true");
    });
  }, []);

  const gallerySettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };

  return (
    <S.Projects>
      <Slider className="project-slick-slide" ref={ref} {...gallerySettings}>
        {projectsData
          .slice()
          .reverse()
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </Slider>
    </S.Projects>
  );
});

ProjectGallery.displayName = "ProjectGallery";

export default ProjectGallery;
