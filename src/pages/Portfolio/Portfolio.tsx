import { ContainerOne, ContainerMain } from './Portfolio.styled';
import Slides from '../../components/Slides/Slides';
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
    <h1>Portfolio</h1>
    <ContainerOne>
          <Slides 
          title={currentProject.title}
          content={currentProject.content}
          img={currentProject.img}
          github={currentProject.github}
          />
      <div>
        <button onClick={handlePrev}>Anterior</button>
        <button onClick={handleNext}>Próximo</button>
      </div>
      </ContainerOne>
    </ContainerMain>
  )
}
