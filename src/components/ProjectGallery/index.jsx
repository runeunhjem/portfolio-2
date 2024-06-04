import { forwardRef } from "react";
import Slider from "react-slick";
import * as S from "./index.styled";
import projectsData from "./projectsData";
import ProjectCard from "../ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectGallery = forwardRef((_props, ref) => {
  const gallerySettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    // lazyLoad: "ondemand",
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
