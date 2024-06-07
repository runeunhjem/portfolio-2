import PropTypes from "prop-types";
import Slider from "react-slick";
import * as S from "./index.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * ProjectCard component that displays project information, including title, tagline,
 * login information, a carousel of images, description, and links.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.project - The project details.
 * @param {string} props.project.title - The title of the project.
 * @param {string} props.project.tagline - The tagline of the project.
 * @param {string} props.project.login - The login information for the project.
 * @param {string[]} props.project.images - Array of image URLs for the project.
 * @param {string} props.project.description - The description of the project.
 * @param {Object[]} props.project.links - Array of link objects for the project.
 * @param {string} props.project.links.label - The label for the link.
 * @param {string} props.project.links.url - The URL for the link.
 * @returns {JSX.Element} The ProjectCard component.
 */
const ProjectCard = ({ project }) => {
  const imageSliderSettings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    lazyLoad: "ondemand",
  };

  return (
    <S.Project>
      <h3>{project.title}</h3>
      <p className="!text-xl">{project.tagline}</p>
      <p className="text-center text-red-700">{project.login}</p>
      <div className="carousel-container sm:px-6 lg:px-36 pb-2 pt-6">
        <Slider {...imageSliderSettings}>
          {project.images.map((image, idx) => (
            <div key={idx} className="image-wrap w-full !p-0 sm:!px-4">
              <img
                className="!w-full"
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
        <div className="carousel-counter !mb-0 pt-4 ">
          {project.images.length} images (Hover to stop slider)
        </div>
      </div>
      <p
        className="description"
        style={{
          margin: "0 auto",
        }}
      >
        {project.description}
      </p>
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
    login: PropTypes.string,
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
