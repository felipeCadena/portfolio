import { Route, Routes } from "react-router-dom"
import Portfolio from "./components/Portfolio/Portfolio"
import Contato from "./components/Contato/Contato"
import Sobre from "./components/Sobre/Sobre"
import Layout from "./components/Layout/Layout"
import NotFound from "./components/NotFound/NotFound"
import Home from "./components/Home/Home"
import GlobalStyles from "./styles/global"
import { ThemeProvider } from "styled-components"
import { useState } from "react"
import dark from './styles/themes/light';
import ligth from './styles/themes/dark';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <>
    <ThemeProvider theme={ isDarkTheme ?  dark : ligth }>
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<Layout 
      toggleTheme={ toggleTheme }
      isDarkTheme={ isDarkTheme }
      />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />}/>
        <Route path="portfolio" element={<Portfolio />}/>
        <Route path="contato" element={<Contato />}/>
      </Route>
      <Route path='/*' element={<NotFound />}/>
    </Routes>
    </ThemeProvider>
    </>
  )
}

export default App
