import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
    <h1>Página não encontrada</h1>
    <Link to='/'>Retorne para a página inicial</Link>
    </>
  )
}
