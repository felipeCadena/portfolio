import styled from 'styled-components';

export const ContainerSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;

  & img {
    width: 30rem;
    margin-top: 1rem;
    animation: 1.5s linear 0s infinite alternate none running imageDev;
  }

  & h1 {
    font-size: 3rem;
  }

  & p {
    font-size: 2rem;
  }

  & .blink {
    border-right: 2px solid ${props => props.theme.colors.primaryText};
    white-space: nowrap;
    overflow: hidden;
  }

  & .animationBlink {
    animation: 
    animationBlink 500ms 4s steps(40) infinite normal, 
    typing 5s steps(40) 1s infinite normal both;
  }

  @keyframes typing {
      from{
        width: 0;
      }
      to{
        width: 105%;
      }
  }

  @keyframes animationBlink {
      from {
        border-right-color: ${props => props.theme.colors.primaryText};
      }
      to{
        border-right-color: transparent;
      }
  }

  @keyframes imageDev {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 1rem;

    & img {
    margin-top: 2rem;
    width: 20rem;
  }

  & h1 {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  & p {
    font-size: 1rem;
    line-height: 2rem;
  }
  }
`;

export const ContainerStacks = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 30vh;

  @media (max-width: 700px) {
    display: flex;
    flex-wrap: wrap; 
  }
`;

export const ContainerHome = styled.main`
  height: 100vh;
  text-transform: uppercase;


  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`;