import styled from 'styled-components';

interface MenuProps {
  menuOpen: boolean;
}

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 10vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.backgroundHeader};

  & img {
    width: 2rem;
  }

  & .theme {
    height: 2rem;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    padding: 0 1rem;
  }
`;

export const NavLinks = styled.nav<MenuProps>`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.theme.colors.primaryText};
  }

  a:hover {
    color: ${props => props.theme.colors.secondaryText};
  }

  @media (max-width: 700px) {
    flex-direction: column;
    position: absolute;
    top: 10vh;
    left: 0;
    width: 100%;
    height: 90vh;
    background-color: ${props => props.theme.colors.backgroundHeader};
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    transform: ${({ menuOpen }) => (menuOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 700px) {
    justify-content: center;
    width: 100%;
  }
`;

export const MenuHamburguer = styled.div<MenuProps>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${props => props.theme.colors.primaryText};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  div:nth-child(1) {
    transform: ${({ menuOpen }) => (menuOpen ? 'rotate(45deg)' : 'rotate(0)')};
  }

  div:nth-child(2) {
    opacity: ${({ menuOpen }) => (menuOpen ? '0' : '1')};
    transform: ${({ menuOpen }) => (menuOpen ? 'translateX(20px)' : 'translateX(0)')};
  }

  div:nth-child(3) {
    transform: ${({ menuOpen }) => (menuOpen ? 'rotate(-45deg)' : 'rotate(0)')};
  }

  @media (max-width: 700px) {
    display: flex;
  }
`;
