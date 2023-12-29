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
    color: black;
    background-color: white;
    margin: 0 1rem;
    padding: 0.6rem;
    border-radius: 1rem;
    border: none;
  }

  & a:hover {
    background-color: #d4ebff;
  }
`