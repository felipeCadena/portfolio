import { Link } from "react-router-dom";
import { useContext } from 'react';
import ThemeContext from "../../contexts/theme";
import { ProjectImage, Container, ContainerMain } from "./Slides.styled";

type PropsSlides = {
  title: string;
  content: string;
  img: string;
  github: string;
}

function Slides({title, content, img, github}: PropsSlides) {
  const { isDarkTheme  } = useContext(ThemeContext);
  return (
    <ContainerMain>
      <ProjectImage>
        {img && <img src={img} alt={title}/>}
      </ProjectImage>
      <Container>
      <h2>{title}</h2>
      <Link to={github} target="_blank">
        <img src={!isDarkTheme ? './github-light.svg' : "/github.svg"} alt="Logo Github" className='icon'/>
      </Link>
      </Container>
      <p>{content}</p>
    </ContainerMain>
  )
}

export default Slides;