import { Route, Routes } from "react-router-dom"
import Portfolio from "./pages/Portfolio/Portfolio"
import Contato from "./pages/Contato/Contato"
import Sobre from "./pages/Sobre/Sobre"
import Layout from "./pages/Layout/Layout"
import NotFound from "./pages/NotFound/NotFound"
import Home from "./pages/Home/Home"
import GlobalStyles from "./styles/global"
import { ThemeProvider } from "styled-components"
import { useState } from "react"
import dark from './styles/themes/dark';
import light from './styles/themes/light';

import ThemeContext from "./contexts/theme"

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkTheme: isDarkTheme, setIsDarkTheme: setIsDarkTheme}}>
    <ThemeProvider theme={ !isDarkTheme ?  dark : light }>
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />}/>
        <Route path="portfolio" element={<Portfolio />}/>
        <Route path="contato" element={<Contato />}/>
      </Route>
      <Route path='/*' element={<NotFound />}/>
    </Routes>
    </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
