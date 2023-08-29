import styled from 'styled-components';

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  min-height: 30vh;

  & h1 {
    margin-top: 1rem;
    font-size: 2rem;
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
    margin-bottom: 1rem;
  }

  & button {
    margin: 1rem;
    padding: 0.6rem;
    border-radius: 1rem;
    border: none;
  }

  & .icon {
    width: 2rem;
  }
`;