import { ContainerAbout, ContainerText } from "./Sobre.styled";

export default function Sobre() {
  return (
    <ContainerAbout>
      <img src="/foto_perfil.png" alt="" width={300}/>
    <ContainerText>
      <h1>Sobre mim</h1>
      
      <p>Com formação em Turismo e uma carreira de 10 anos como consultor de viagens, adquiri habilidades sólidas em lidar com pessoas e trabalho em equipe.</p>

      <p>Atualmente, sou o proprietário de uma empresa de Marketing Digital, além de estar me formando em desenvolvimento web. Minha jornada de aprendizado me levou a uma profunda imersão em diversas ferramentas essenciais, incluindo Javascript, React (abrangendo Redux, Context API e Hooks), Typescript, Git, GitHub, Docker, MySQL, MongoDB, Node, Express e API Rest, bem como Python.</p>

      <p>Estou empenhado em aplicar esse conjunto diversificado de habilidades para criar soluções digitais impactantes. Fique à vontade para explorar meu perfil no GitHub: felipeCadena.</p>

    </ContainerText>
    </ContainerAbout>
  )
}
