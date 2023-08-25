import { Link, NavLink } from "react-router-dom";
import { ContainerHeader, ContainerLinks } from "./Header.styled";

export default function Header() {
  return (
    <ContainerHeader>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='sobre'>Sobre</NavLink>
      <NavLink to='portfolio'>Portfolio</NavLink>
      <NavLink to='contato'>Contato</NavLink>
      <ContainerLinks>
        <Link to='https://github.com/felipeCadena' target="_blank">
          <img src="/github.svg" alt="Logo Github" width={20}/>
        </Link>
        <Link to='https://www.linkedin.com/in/felipe-caden/' target="_blank">
          <img src="/linkedin.svg" alt="Logo Linkedin" width={20}/>
        </Link>
        <Link to='/resume.pdf' target="_blank" download>
          <img src="/download.svg" alt="Icone para download" width={20}/>
          Currículo
        </Link>
      </ContainerLinks>
    </ContainerHeader>
  )
}
