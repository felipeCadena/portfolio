type TypeLogos = {
  image: string;
}

export default function Logos({image}: TypeLogos) {
  return (<img src={image} alt={`Logo da linguagem: ${image}`} width={20}/>)
}
