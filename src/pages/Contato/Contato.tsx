import { Link } from "react-router-dom";
import { ContainerRedes } from "./Contato.styled";

export default function Contato() {
  return (
    <>
      <ContainerRedes>
      <h1>Contato</h1>
        <div className="contact">
         <p>Github</p>
          <Link to='https://github.com/felipeCadena' target="_blank">
          <img src="/github.svg" alt="Logo Github" width={30}/>
          </Link>
        </div>
        <div className="contact">
          <p>Linkedin</p>
          <Link to='https://www.linkedin.com/in/felipe-caden/' target="_blank">
          <img src="/linkedin.svg" alt="Logo Linkedin" width={30}/>
          </Link>
        </div>
        <div className="email">
          <img src="/mail.svg" alt="Logo E-mail" width={30}/>
          <p>felipecaden@gmail.com</p>
        </div>
      </ContainerRedes>
    </>
  )
}
