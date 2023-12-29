import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem; 
    font-family: 'Courier New', Courier, monospace;
  }
  body {
    color: ${(props) => props.theme.colors.primaryText};
    background-color: ${(props) => props.theme.colors.background};
    transition: 0.3s ease;
  }

  @media (max-width: 700px) {
    html, body {
      position: relative;
    }
  }
`;

export default GlobalStyles;
