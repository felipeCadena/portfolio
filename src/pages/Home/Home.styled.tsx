import styled from 'styled-components';

export const ContainerHome = styled.main`
    width: 100vw;
    margin: 2rem;

  & h2 {
    text-align: center;
    margin: 1rem;
    font-size: 2rem;
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
  height: 80vh;

  & img {
    margin: 2rem;
    width: 25rem;
    border-radius: 50rem;
    border: 1px solid #808080;
  }

  & h1 {
    font-size: 3rem;
  }

  & p {
    font-size: 2rem;
  }

  & .about {
    margin-top: 2rem;
    font-size: 1rem;
    max-width: 30rem;
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