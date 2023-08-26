import styled from 'styled-components';

export const StacksImage = styled.img`
  width: 3rem;
  margin: 1rem;
  
  & :hover {
    scale: 2;
  }

  @media (max-width: 700px) { 
    width: 2rem;
    margin: 1rem;
  }
`;