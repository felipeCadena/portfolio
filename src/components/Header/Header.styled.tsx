import styled from 'styled-components';

export const ContainerHeader = styled.header`
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 height: 10vh;
 /* background-color:; */

 & img {
  height: 2rem;
  width: 2rem;
 }

 & a:hover {
   color: red;
 }

 & a {
  text-decoration: none;
  cursor: pointer;
  color: #808080;

 }
`;

export const ContainerLinks = styled.div`
  display: flex;
  gap: 1rem;
`;