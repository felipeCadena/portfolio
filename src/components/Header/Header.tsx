import { Link, NavLink } from "react-router-dom";
import { ContainerHeader, ContainerLinks, MenuHamburguer } from "./Header.styled";

import ThemeContext from "../../contexts/theme";
import { useContext, useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);
  const { isDarkTheme, setIsDarkTheme  } = useContext(ThemeContext);

  const toggleTheme = () => {
      setIsDarkTheme(!isDarkTheme);
  };

  const toggleMenu = () => {
    setActive(prev => !prev)
  }

  return (
    <>
      <MenuHamburguer className={active ? 'icon iconActive' : 'icon'} onClick={toggleMenu}>
        <div className="hamburguer hamburguerIcon"></div>
      </MenuHamburguer>
      <ContainerHeader className={active ? 'menu menuOpen' : 'menu menuClose'}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='sobre'>Sobre</NavLink>
        <NavLink to='portfolio'>Portfolio</NavLink>
        <NavLink to='contato'>Contato</NavLink>
      <ContainerLinks>
        <Link to='https://github.com/felipeCadena' target="_blank">
          <img src={!isDarkTheme ? './github-light.svg' : "/github.svg"} alt="Logo Github" width={20}/>
        </Link>
        <Link to='https://www.linkedin.com/in/felipe-caden/' target="_blank">
          <img src="/linkedin.svg" alt="Logo Linkedin" width={20}/>
        </Link>
          <Link to='/resume.pdf' target="_blank" download>
            <img src="/download.svg" alt="Icone para download"/>
            <span>Currículo</span>
          </Link>
      </ContainerLinks>
        <img 
          className="theme"
          src={ !isDarkTheme ? '/icon-moon.svg' : '/icon-sun.svg' }
          alt="Icone"
          onClick={ toggleTheme }
          />
      </ContainerHeader>
    </>
  )
}
