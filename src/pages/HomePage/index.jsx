import { useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Intro from "../../components/Intro";
import ProjectGallery from "../../components/ProjectGallery";
import * as S from "./index.styled";
import { Button } from "@mui/material";

const HomePage = ({ projectNumber = 1, numberOfProjects = 7 }) => {
  const sliderRef = useRef(null);

  const nextProject = () => {
    sliderRef.current.slickNext();
  };

  const previousProject = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <S.Container>
      <S.Heading>
        <Link to="https://portfolio1-ca.netlify.app/" target="_blank">
          Old portfolio here (No frameworks)
        </Link>
      </S.Heading>
      <Intro />
      <h2 className="my-6 text-center text-5xl font-bold">School Projects</h2>

      <S.ProjectCount>
        <Button onClick={previousProject}>Previous</Button>
        <div className="project-count">
          Project {projectNumber} / {numberOfProjects}
        </div>
        <Button onClick={nextProject}>Next</Button>
      </S.ProjectCount>

      <ProjectGallery ref={sliderRef} />
    </S.Container>
  );
};

HomePage.propTypes = {
  projectNumber: PropTypes.number,
  numberOfProjects: PropTypes.number,
};

export default HomePage;
