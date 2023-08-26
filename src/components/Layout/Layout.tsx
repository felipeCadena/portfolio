import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

type PropsHeader = {
  toggleTheme: () => void,
  isDarkTheme: boolean,
};

export default function Layout({isDarkTheme, toggleTheme}: PropsHeader) {
  return (
    <>
      <Header 
      toggleTheme={ toggleTheme }
      isDarkTheme={ isDarkTheme }
      />
      <Outlet/>
      <footer style={{textAlign: 'center', margin: '1rem'}}>© 2023 Felipe Cadena</footer>
    </>
  )
}
