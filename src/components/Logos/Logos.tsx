import { StacksImage } from "./Logo.styled"

const stacks = ['/js.svg', '/typescript.svg', '/react.svg', 'redux.svg', '/html.svg', '/css.svg', '/git.svg', '/jest.svg', '/material-ui.svg', '/bootstrap.svg']

export default function Logos() {
  return (
    stacks.map((stack) => (
      <StacksImage key={stack} src={stack} alt={`Logo da linguagem: ${stack}`} title={stack.replace('/', ' ').replace('.svg', ' ')}/>
    ))
  )
}
