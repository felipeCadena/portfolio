import styled from 'styled-components';

export const ContainerMain = styled.div`

  @media (max-width: 700px) { 
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }`

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  `

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  gap: 1rem;

  & a {
    text-decoration: none;
    padding: 0.6rem 2rem;
    margin: 1rem;
    border-radius: 2rem;
    color: white;
    background-color: ${props => props.theme.colors.secondaryText}
  }

  & a:hover {
    background-color: ${props => props.theme.colors.hover};
  }
`