import { Link } from 'react-router-dom';
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
    align-items: center;
    margin: 0;


    & h2 {
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
    }
  }
`;

export const ResumeLink = styled(Link)`
  text-decoration: none;
  padding: 0.6rem 2rem;
  margin: 1rem;
  border-radius: 2rem;
  color: white;
  background-color: ${props => props.theme.colors.secondaryText};

  &:hover {
    background-color: ${props => props.theme.colors.hover};
  }

  @media (max-width: 700px) {
    font-size: 0.9rem;
  }
`;

export const ContainerContato = styled.div`

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`

export const ContainerSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80vh;

  & img {
    margin: 2rem;
    width: 25rem;
    background-image: linear-gradient(to bottom, ${props => props.theme.colors.secondaryText} 0%, #000 100%);
    border-radius: 50rem / 35rem;
  }

  & h1 {
    font-size: 3rem;
    color: ${props => props.theme.colors.secondaryText};
  }

  & p {
    font-size: 2rem;
  }

  & .about {
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1rem;
    max-width: 30rem;
  }

  & .blink {
    border-right: 2px solid ${props => props.theme.colors.primaryText};
    white-space: nowrap;
    overflow: hidden;
    margin: 0 0.5rem;
  }

  & .animationBlink {
    animation: 
      animationBlink 500ms 4s steps(40) infinite normal, 
      typing 5s steps(40) 1s infinite normal both;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 105%;
    }
  }

  @keyframes animationBlink {
    from {
      border-right-color: ${props => props.theme.colors.primaryText};
    }
    to {
      border-right-color: transparent;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
    margin-top: 1rem;
    height: auto;

    & img {
      margin: 1rem;
      width: 18rem;
    }

    & h1 {
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 2rem;
    }

    & p {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.5rem;
    }

    & .about {
      margin: 1rem;
      font-size: 0.9rem;
      max-width: 100%;
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
    flex-wrap: wrap; 
    gap: 1rem;
  }
`;
