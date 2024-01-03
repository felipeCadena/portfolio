import styled from 'styled-components';

// export const MenuHamburguer = styled.div`
//   @media (max-width: 700px) {

//   & .icon {
//     position: absolute;
//     z-index: 4;
//     left: 1%;
//     width: fit-content;
//     height: 3rem;
//     cursor: pointer;
//   }

//   & .hamburguer {
//     top: 5%;
//     left: 85%;
//     width: 2rem;
//     height: 0.3rem;
//     background-color: #007ACC;
//     position: absolute;
//     box-shadow: 0 2px 5px rgba(0 0 0 0.2);
//     transition: 0.5s;
//   }

//   & .hamburguer::before {
//     top: -1rem;
//     content: '';
//     position: absolute;
//     width: 2rem;
//     height: 0.3rem;
//     background-color: #007ACC;
//     box-shadow: 0 2px 5px rgba(0 0 0 0.2);
//     transition: 0.5s;
//   }

//   & .hamburguer::after {
//     top: 1rem;
//     content: '';
//     position: absolute;
//     width: 2rem;
//     height: 0.3rem;
//     background-color: #007ACC;
//     box-shadow: 0 2px 5px rgba(0 0 0 0.2);
//     transition: 0.5s;
//   }
// }
// `;

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 10vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.backgroundHeader};

  & img {
    width: 2rem;
  }
  
  & a:hover {
    color: ${props => props.theme.colors.secondaryText};
  }
  
  & a {
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.theme.colors.primaryText};
  }
  
  & .theme {
    height: 2rem;
  }

  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    gap: 1rem;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-content: center;

  & span {
    vertical-align: super;
  }

  @media (max-width: 700px) {
    display: flex;
    gap: 3rem;

  }
`;