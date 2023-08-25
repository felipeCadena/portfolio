import { Route, Routes } from "react-router-dom"
import Portfolio from "./components/Portfolio/Portfolio"
import Contato from "./components/Contato/Contato"
import Sobre from "./components/Sobre/Sobre"
import Layout from "./components/Layout/Layout"
import NotFound from "./components/NotFound/NotFound"
import Home from "./components/Home/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />}/>
        <Route path="portfolio" element={<Portfolio />}/>
        <Route path="contato" element={<Contato />}/>
      </Route>
      <Route path='/*' element={<NotFound />}/>
    </Routes>
  )
}

export default App
