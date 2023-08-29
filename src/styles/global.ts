import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Saira';
    src: url("https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,400;0,700;1,400&display=swap");
  }

  :root {
    font-family: 'Saira', sans-serif;

  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem; 
  }
  body {
    color: ${(props) => props.theme.colors.primaryText};
    background-color: ${(props) => props.theme.colors.background};
  }

  @media (max-width: 700px) {
    html, body {
      position: relative;
    }
  }
`;

export default GlobalStyles;
