import { LogoContainer, StacksContainer, StacksImage, Title } from "./Logo.styled"

const stacks = ['/js.svg', '/typescript.svg', 
  '/react.svg', 'redux.svg', 
  '/tailwind.svg', '/css.svg', '/material-ui.svg', 
  '/bootstrap.svg', "/java.svg", "/node.svg", 
  "/mysql.svg", "/docker.svg"]

export default function Logos() {
  return (
    <LogoContainer>
    <Title>Linguagens</Title>
      <StacksContainer>
        {stacks.map((stack) => (
          <StacksImage key={stack} src={stack} alt={`Logo da linguagem: ${stack}`} title={stack.replace('/', ' ').replace('.svg', ' ')}/>
          ))}
      </StacksContainer>
    </LogoContainer>
  )
}
