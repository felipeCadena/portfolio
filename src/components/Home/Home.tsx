import Logos from "../Logos/Logos";
import { ContainerMain, ContainerStacks } from "./Home.styled";

export default function Home() {
  return (
    <>
    <ContainerMain>
      <div>
        <h1>Olá, sou <strong>Felipe Cadena</strong></h1>
        <p>Desenvolvedor Front-end</p>
      </div>
      <img src='/developer.svg' alt="Pessoa codando" width={500}/>
    </ContainerMain>
      <h2 style={{textAlign: 'center'}}>Stacks:</h2>
      <ContainerStacks>
        <Logos /> 
      </ContainerStacks>
    </>
  )
}
