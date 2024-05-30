import { Link } from "react-router-dom";
import Intro from "../../components/Intro";
import * as S from "./index.styled";

const HomePage = () => {
  return (
    <S.Container>
      <S.Heading>
        <Link to="https://portfolio1-ca.netlify.app/" target="_blank">
          Old portfolio here (No frameworks)
        </Link>
      </S.Heading>
      <Intro />
    </S.Container>
  );
};

export default HomePage;
