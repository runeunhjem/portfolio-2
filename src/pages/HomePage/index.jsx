import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Intro from "../../components/Intro";
import ProjectGallery from "../../components/ProjectGallery";
import * as S from "./index.styled";

/**
 * HomePage component displays the homepage with an introduction, project gallery,
 * and navigation links to old portfolio and school projects.
 *
 * @param {Object} props - The component props.
 * @param {number} props.numberOfProjects - The total number of projects to be displayed.
 * @returns {JSX.Element} The HomePage component.
 */
const HomePage = ({ numberOfProjects }) => {
  const sliderRef = useRef(null);
  const [projectNumber, setProjectNumber] = useState(1);

  /**
   * Move to the next project in the slider.
   */
  const nextProject = () => {
    sliderRef.current.slickNext();
    setProjectNumber((prev) => (prev < numberOfProjects ? prev + 1 : 1));
  };

  /**
   * Move to the previous project in the slider.
   */
  const previousProject = () => {
    sliderRef.current.slickPrev();
    setProjectNumber((prev) => (prev > 1 ? prev - 1 : numberOfProjects));
  };

  return (
    <S.Container>
      <S.Heading>
        <Link
          className="hover-links portfolio-link mb-2 !flex !flex-wrap justify-center whitespace-pre-line xs:justify-end"
          to="https://portfolio1-ca.netlify.app/"
          target="_blank"
        >
          <span className="whitespace-nowrap">Old portfolio here</span>
          <span className="whitespace-nowrap">&nbsp;(No frameworks)</span>
        </Link>
      </S.Heading>
      <Intro />
      <h2 className="mb-0 mt-12 text-center text-3xl font-bold" id="projects">
        School Projects
      </h2>

      <S.ProjectCount>
        <button onClick={previousProject}>PREVIOUS</button>
        <div className="project-count">
          {projectNumber} / {numberOfProjects}
        </div>
        <button onClick={nextProject}>NEXT</button>
      </S.ProjectCount>

      <ProjectGallery ref={sliderRef} />
    </S.Container>
  );
};

HomePage.propTypes = {
  numberOfProjects: PropTypes.number.isRequired,
};

export default HomePage;
