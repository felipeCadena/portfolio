import { Link } from "react-router-dom";
import { ContainerAbout, ContainerText, Title } from "./Sobre.styled";

export default function Sobre() {
  return (
    <>
      <Title>Sobre mim</Title>
    <ContainerAbout>
      <img src="/foto_perfil.png" alt="Foto Perfil"/>
    <ContainerText>
      <p>Com formação em Turismo e uma carreira de 10 anos como consultor de viagens, adquiri habilidades sólidas em lidar com pessoas e trabalho em equipe.</p>

      <p>Atualmente, sou o proprietário de uma empresa de Marketing Digital, além de estar me formando em desenvolvimento web. Minha jornada de aprendizado me levou a uma profunda imersão em diversas ferramentas essenciais, incluindo Javascript, React (abrangendo Redux, Context API e Hooks), Typescript, Git, GitHub, Docker, MySQL, MongoDB, Node, Express e API Rest, bem como Python.</p>

      <p>Estou empenhado em aplicar esse conjunto diversificado de habilidades para criar soluções digitais impactantes.</p> 
      
      <p>Fique à vontade para explorar meu perfil no GitHub: <Link to='https://github.com/felipeCadena' target="_blank" className="link">felipeCadena</Link></p>
    </ContainerText>
    </ContainerAbout>
    </>
  )
}
