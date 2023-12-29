import styled from 'styled-components';

export const StacksContainer = styled.div`
  width: 40rem;
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