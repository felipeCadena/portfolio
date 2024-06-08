import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StacksContainer = styled.div`
  width: 40rem;

  @media (max-width: 700px) { 
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`

export const Title = styled.h1`
    font-size: 2rem;
`

export const StacksImage = styled.img`
  width: 5rem;
  margin: 1rem;
  
  & img:hover {
    scale: 2;
  }

  @media (max-width: 700px) { 
    width: 3rem;
  }
`;