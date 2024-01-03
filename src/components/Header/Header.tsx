import { Link } from "react-router-dom";
import { ContainerHeader, ContainerLinks } from "./Header.styled";

import ThemeContext from "../../contexts/theme";
import { useContext } from "react";

export default function Header() {
  // const [active, setActive] = useState(false);
  const { isDarkTheme, setIsDarkTheme  } = useContext(ThemeContext);

  const toggleTheme = () => {
      setIsDarkTheme(!isDarkTheme);
  };

  // const toggleMenu = () => {
  //   setActive(prev => !prev)
  // }

  return (
    <>
      {/* <MenuHamburguer className={active ? 'icon iconActive' : 'icon'} onClick={toggleMenu}>
        <div className="hamburguer hamburguerIcon"></div>
      </MenuHamburguer> */}
      <ContainerHeader>
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
