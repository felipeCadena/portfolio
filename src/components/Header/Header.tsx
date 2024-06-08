import { Link } from "react-router-dom";
import { ContainerHeader, ContainerLinks, MenuHamburguer, NavLinks } from "./Header.styled";
import ThemeContext from "../../contexts/theme";
import { useContext, useState } from "react";

export default function Header() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <ContainerHeader>
      <img 
          className="theme"
          src={ !isDarkTheme ? '/icon-moon.svg' : '/icon-sun.svg' }
          alt="Icone"
          onClick={ toggleTheme }
        />
        <MenuHamburguer onClick={toggleMenu} menuOpen={menuOpen}>
          <div />
          <div />
          <div />
        </MenuHamburguer>
        <NavLinks menuOpen={menuOpen}>
          <a href='#projetos'>Projetos</a>
          <a href='#contato'>Contato</a>
          <ContainerLinks>
            <Link to='https://github.com/felipeCadena' target="_blank">
              <img src="/github.svg" alt="Logo Github" width={20}/>
            </Link>
            <Link to='https://www.linkedin.com/in/felipe-caden/' target="_blank">
              <img src="/lk.svg" alt="Logo Linkedin" width={20}/>
            </Link>
          </ContainerLinks>
        </NavLinks>
      </ContainerHeader>
    </>
  );
}
