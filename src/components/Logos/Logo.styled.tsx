import styled from 'styled-components';

export const StacksImage = styled.img`
  width: 3rem;
  
  & img:hover {
    scale: 2;
  }

  @media (max-width: 700px) { 
    width: 3rem;
  }
`;