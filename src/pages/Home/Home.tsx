import Logos from "../../components/Logos/Logos";
import { ContainerSection, ContainerStacks, ContainerHome } from "./Home.styled";

export default function Home() {
  return (
    <ContainerHome>
    <ContainerSection>
      <div>
        <p>Olá, sou</p>
        <h1>Felipe Cadena</h1>
        <p className="blink animationBlink">Desenvolvedor Front-end!</p>
      </div>
      <img src='/developer.svg' alt="Pessoa codando"/>
    </ContainerSection>
          <h2 style={{textAlign: 'center'}}>Stacks:</h2>
      <ContainerStacks>
        <Logos /> 
      </ContainerStacks>
    </ContainerHome>
  )
}
