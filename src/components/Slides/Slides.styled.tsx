import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 10px;

  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`


export const Img = styled.img`
  width: 500px;
  height: 500px;

  @media (max-width: 700px) {
    display: none;
  }
`

export const ContainerMain = styled.div`

  @media (max-width: 700px) { 
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }`


export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

export const ContainerDetails = styled.div`

   @media (max-width: 700px) {
    margin: 2rem;
  }
`

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;

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