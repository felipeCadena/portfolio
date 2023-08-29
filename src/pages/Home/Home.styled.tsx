import styled from 'styled-components';

export const ContainerHome = styled.main`
  text-transform: uppercase;

  & h2 {
    text-align: center;
    margin: 1rem;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;

    & h2 {
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
    }
  }
`;

export const ContainerSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;

  & img {
    width: 25rem;
    margin: 2rem;
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
    margin: 2rem;
    width: 18rem;
  }

  & h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
  }

  & p {
    font-size: 1rem;
    font-weight: 700;
    line-height: 2rem;
  }
}
`;

export const ContainerStacks = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 1rem;

  @media (max-width: 700px) {
    display: flex;
    flex-wrap: wrap; 
  }
`;