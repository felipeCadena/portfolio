import styled from 'styled-components';

export const ContainerRedes = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 50vh;

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