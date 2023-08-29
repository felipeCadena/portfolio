import { Link } from "react-router-dom";
import { ContainerRedes } from "./Contato.styled";

import ThemeContext from "../../contexts/theme";
import { useContext } from "react";

export default function Contato() {

  const { isDarkTheme } = useContext(ThemeContext);

  return (
      <ContainerRedes>
      <h1>Contato</h1>
        <div className="contact">
         <p>Github</p>
          <Link to='https://github.com/felipeCadena' target="_blank">
          <img src={!isDarkTheme ? './github-light.svg' : "/github.svg"} alt="Logo Github" width={50} title="Github"/>
          </Link>
        </div>
        <div className="contact">
          <p>Linkedin</p>
          <Link to='https://www.linkedin.com/in/felipe-caden/' target="_blank">
          <img src="/linkedin.svg" alt="Logo Linkedin" width={50} title="Linkedin"/>
          </Link>
        </div>
        <div className="email">
          <img src={!isDarkTheme ? "/mail_dark.svg" : "/mail.svg" } alt="Logo E-mail" title="E-mail" width={30}/>
          <p>felipecaden@gmail.com</p>
        </div>
      </ContainerRedes>
  )
}
