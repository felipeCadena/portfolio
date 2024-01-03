import styled from 'styled-components';

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  min-height: 30vh;

  & h1 {
    margin-top: 1rem;
    font-size: 2rem;
  }

  & button {
    padding: 0.6rem 2rem;
    margin: 1rem;
    border-radius: 2rem;
    border: none;
    color: white;
    background-color: ${props => props.theme.colors.secondaryText};
  }

  & button:hover {
    background-color: ${props => props.theme.colors.hover};
    cursor: pointer;
  }
`;

export const ContainerOne = styled.div`
    display: flex;
    flex-direction: column;

  & img {
    width: 40rem;
    margin: 1rem auto;
    border-radius: 2rem;
  }

  & p {
    margin: 0 auto;
    width: 50%;

  }

  & .icon {
    width: 2rem;
  }

  @media (max-width: 700px) { 
  
    & img {
    width: 20rem;
    border-radius: 2rem;
  }

  & p {
    margin: 0 1rem;
  }
  }
`;