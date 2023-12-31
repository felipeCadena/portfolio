import Logos from "../../components/Logos/Logos";
import Contato from "../../components/Contato/Contato";
import Portfolio from "../../components/Portfolio/Portfolio";
import { ContainerSection, ContainerStacks, ContainerHome, ResumeLink } from "./Home.styled";

export default function Home() {
  return (
    <ContainerHome>
    <ContainerSection>
      <div>
        <p>Olá, sou</p>
        <h1>Felipe Cadena</h1>
        <p className="blink animationBlink">Desenvolvedor Front-end!</p>
        <p className="about">Apaixonado por tecnologia! Com experiência em React.js, Next.js, Redux, JavaScript, TypeScript, Styled Components e consumo de APIs REST.</p>
          <div>
            <ResumeLink to='#contato'>
              <span className="resume">Entrar em contato</span>
            </ResumeLink>
            <ResumeLink to='/resume.pdf' target="_blank" download>
              <span className="resume">Download CV</span>
            </ResumeLink>
          </div>
      </div>
      <img src='./foto_perfil.png' alt="Pessoa codando"/>
    </ContainerSection>
          <h2>Stacks:</h2>
      <ContainerStacks>
        <Logos /> 
      </ContainerStacks>
    <Portfolio />
    <Contato />
    </ContainerHome>
  )
}
