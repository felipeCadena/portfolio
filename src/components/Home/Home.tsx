import Logos from "../Logos/Logos";

export default function Home() {
  return (
    <>
      <img src='/foto_perfil.png' alt="Foto Felipe Cadena" width={300}/>
      <h1>Olá, sou <strong>Felipe Cadena</strong></h1>
      <p>Desenvolvedor Front-end</p>

      <h2>Stacks:</h2>
      <Logos image='/redux.svg'/>
      <Logos image='/redux.svg'/>
      <Logos image='/redux.svg'/>
      <Logos image='/redux.svg'/>
      <Logos image='/redux.svg'/>
    </>
  )
}
