import { Outlet } from "react-router-dom";
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";

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
      <Footer />
    </>
  )
}
