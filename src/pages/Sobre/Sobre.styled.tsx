import styled from 'styled-components';

export const ContainerAbout = styled.section`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin: 10rem;

  & img {
    max-width: 30rem;
    max-height: 30rem;
    border-radius: 50rem;
    border: 1px solid #808080;
  }
`;

export const ContainerText = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;