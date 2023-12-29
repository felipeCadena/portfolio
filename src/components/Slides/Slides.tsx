import { Link } from "react-router-dom";
// import { useContext } from 'react';
// import ThemeContext from "../../contexts/theme";
import { Container, ContainerLinks, ContainerTitle } from "./Slides.styled";

type PropsSlides = {
  title: string;
  content: string;
  img: string;
  github: string;
  stack: string;
  project: string;
}

function Slides({title, content, img, github, stack, project}: PropsSlides) {
  return (
      <Container>
        {img && <img src={img} alt={title}/>}
        <div>
          <h2>{title}</h2>
          <ContainerTitle>
          <p>Stack: {stack}</p>
          </ContainerTitle>
        <p>{content}</p>
        <ContainerLinks>
          <Link to={github} target="_blank">
            Acessar repositório
          </Link>
          <Link to={project} target="_blank">
            Acessar projeto
          </Link>
        </ContainerLinks>
      </div>
      </Container>
  )
}

export default Slides;