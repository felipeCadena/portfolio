import styled from 'styled-components';

export const ContainerMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;

  & img {
    margin-top: 1rem;
    animation: 1.5s linear 0s infinite alternate none running imageDev;
  }

  @keyframes imageDev {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;

export const ContainerStacks = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

`;