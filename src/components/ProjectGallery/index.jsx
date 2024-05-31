import { forwardRef } from "react";
import Slider from "react-slick";
import * as S from "./index.styled";
import projectsData from "./projectsData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectGallery = forwardRef((_props, ref) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    adaptiveHeight: false,
    arrows: false,
  };

  return (
    <S.Projects>
      <Slider ref={ref} {...settings}>
        {projectsData.map((project) => (
          <S.Project key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.tagline}</p>
            <div className="carousel-container p-6">
              <Slider {...settings}>
                {project.images.map((image, idx) => (
                  <div key={idx}>
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${idx + 1}`}
                    />
                  </div>
                ))}
              </Slider>
              <div className="carousel-counter py-4">
                {project.images.length} images
              </div>
            </div>
            <p>{project.description}</p>
            <div className="buttons-container">
              {project.links.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => window.open(link.url, "_blank")}
                  className={`button-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </S.Project>
        ))}
      </Slider>
    </S.Projects>
  );
});

ProjectGallery.displayName = "ProjectGallery";

export default ProjectGallery;
