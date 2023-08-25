import Logos from "../Logos/Logos";
import { ContainerMain } from "./Home.styled";

export default function Home() {
  return (
    <ContainerMain>
      <img 
      src='/foto_perfil.png' 
      alt="Foto Felipe Cadena" 
      width={300}
      className="foto"
      />
      <h1>Olá, sou <strong>Felipe Cadena</strong></h1>
      <p>Desenvolvedor Front-end</p>

      <h2>Stacks:</h2>
      <div>
        <Logos image='/js.svg'/>
        <Logos image='/react.svg'/>
        <Logos image='/redux.svg'/>
        <Logos image='/html.svg'/>
        <Logos image='/css.svg'/>
        <Logos image='/git.svg'/>
        <Logos image='/jest.svg'/>
        <Logos image='/material-ui.svg'/>
        <Logos image='/styled-components.svg'/>
        <Logos image='/tailwind.svg'/>
        <Logos image='/bootstrap.svg'/> 
      </div>
    </ContainerMain>
  )
}
