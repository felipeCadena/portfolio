import styled from 'styled-components';

export const ContainerRedes = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 50vh;

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

  & .email {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;