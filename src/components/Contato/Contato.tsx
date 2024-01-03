import { Link } from "react-router-dom";
import { Container, ContainerRedes } from "./Contato.styled";

export default function Contato() {

  const copyToClipboard = async () => {
      await navigator.clipboard.writeText('felipecaden@gmail.com');
      window.alert('Texto copiado para a área de transferência');
  }

  return (
    <Container>
      <h1 id="contato">Contato</h1>
      <ContainerRedes>
        <div className="contact">
          <Link to='https://github.com/felipeCadena' target="_blank">
          <img src="/github.svg" alt="Logo Github" width={50} title="Github"/>
          </Link>
        </div>
        <div className="contact">
          <Link to='https://www.linkedin.com/in/felipe-caden/' target="_blank">
          <img src="lk.svg" alt="Logo Linkedin" width={50} title="Linkedin"/>
          </Link>
        </div>
        <div onClick={copyToClipboard} className="email">
          <img src="/mail.svg" alt="Logo E-mail" title="Clique para copiar o e-mail" width={30}/>
        </div>
      </ContainerRedes>
    </Container>
  )
}