import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-top: 1rem;
`;

export const ContainerAbout = styled.section`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin: 2rem;

  & img {
    width: 15rem;
    border-radius: 50rem;
    border: 1px solid #808080;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 100vw;
    max-height: 100vh;
    margin-bottom: 4rem;
    
    & img {
    width: 12rem;
    border-radius: 50rem;
    border: 1px solid #808080;
  }
}
`;

export const ContainerText = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin-top: 1rem;

  @media (max-width: 700px) { 
    width: 80vw;
  }
`;