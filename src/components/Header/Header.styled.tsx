import styled from 'styled-components';

export const ContainerHeader = styled.header`
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 height: 10vh;
 width: 100vw;
 background-color: ${props => props.theme.colors.backgroundHeader};

 & img {
   width: 1.5rem;
   
  }
  
  & a:hover {
    color: red;
  }
  
  & a {
    text-decoration: none;
    cursor: pointer;
    color: #808080;
  }
  
  & .theme {
    height: 2rem;
  }

  @media (max-width: 700px) {
    width: 100%;
    display: flex;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-content: center;

  @media (max-width: 700px) {
    display: none;
  }
// `;