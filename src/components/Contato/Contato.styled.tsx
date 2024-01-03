import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  height: 40vh;

  & h1 {
    font-size: 2rem;
  }
`

export const ContainerRedes = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  & h1 {
    font-size: 2rem;
  }

  & p {
    font-weight: 700;
  }

  & .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  & .contact:hover {
    transform: scale(1.4);
    transition: transform 0.3s ease-in-out;
  }

  & .email {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }

  & .email:hover {
    transform: scale(1.4);
    transition: transform 0.3s ease-in-out;
  }

  & img {
    width: 2rem;
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 4rem;
    display: block; 
    width: 100%;
    padding: 1rem;
  }
`;