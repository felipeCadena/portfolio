import { ContainerOne, ContainerMain } from './Portfolio.styled';
import Slides from '../Slides/Slides';
import projects from '../../utils/projects';
import { useState } from 'react';


export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <ContainerMain>
    <h1 id='projetos'>Projetos</h1>
      <div>
        <button onClick={handlePrev}>Anterior</button>
        <button onClick={handleNext}>Próximo</button>
      </div>
    <ContainerOne>
          <Slides 
          title={currentProject.title}
          content={currentProject.content}
          img={currentProject.img}
          github={currentProject.github}
          stack={currentProject.stack}
          project={currentProject.project}
          />
      </ContainerOne>
    </ContainerMain>
  )
}
