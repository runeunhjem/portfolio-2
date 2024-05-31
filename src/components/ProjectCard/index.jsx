import PropTypes from "prop-types";
import Slider from "react-slick";
import * as S from "./index.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = ({ project }) => {
  const imageSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <S.Project>
      <h3>{project.title}</h3>
      <p>{project.tagline}</p>
      <div className="carousel-container p-6">
        <Slider {...imageSliderSettings}>
          {project.images
            .slice()
            .reverse()
            .map((image, idx) => (
              <div key={idx} className="w-full">
                <img
                  src={image}
                  alt={
                    project.title
                      ? `${project.title} screenshot ${project.images.length - idx}`
                      : `Project screenshot ${project.images.length - idx}`
                  }
                />
              </div>
            ))}
        </Slider>
        <div className="carousel-counter py-4">
          {project.images.length} images
        </div>
      </div>
      <p style={ {
        margin: "0 auto",
        width: "80%",
      }}>{project.description}</p>
      <div className="buttons-container">
        {project.links.map((link, idx) => (
          <button
            key={idx}
            onClick={() => window.open(link.url, "_blank")}
            className={`button-${project.title
              .replace(/[^a-zA-Z0-9\s]/g, "")
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
          >
            {link.label}
          </button>
        ))}
      </div>
    </S.Project>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    tagline: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string,
      }),
    ),
  }),
};

export default ProjectCard;