import React from "react";
import { words } from "../words";
import styled from "styled-components";
import WordCount from "../components/WordCount";
import LinkButton from "../components/LinkButton";
import HomeIcon from "@mui/icons-material/Home";
import Title from "../components/Title";

//crear una tabla con todas las palabras, e informacion de cada palabra,
//cantidad de palabras
//numero de palabras con cada letra
//pushear palabras al local storage para luego subirlas
//marcar palabras en el local storage para eliminar posteriormente

const Table = styled.table`
  border: 2px solid #1c2128;
`;

const Row = styled.tr`
  background-color: #00193e29;
`;

const Cell = styled.td`
  border: 1px solid #0b397e;
  padding: 10px;
  color: ${(props) => props.$color};
  text-align: left;
  text-transform: ${props => props.$uppercase};
  background-color: ${props => props.$backgroundcolor};
  font-weight: 600;
  @media(max-width:700px){
    font-size: 0.8rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 2em;
  flex-direction: column;
`;

const Form = styled.form`
display: flex;
align-items: center;
justify-content: center;
gap: 1em;
`

const Input = styled.input`
padding: 10px 15px;
font-size: 1.5em;
background-color: #00193e29;
border: 2px solid #0b397e;
border-radius: 10px;
&::placeholder{
  color: #5498ff;
}
`


export default function WordList() {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const wordArrays = words.filter((item) =>
    item.word.toLowerCase().includes(letters)
  );

  return (
    <>
<Title text={"WORD LIST"} />

      <Header>
      <LinkButton to={"/"} text={"Home"} logo={<HomeIcon> </HomeIcon>} />
        <WordCount text={"Palabras totales:"} />
      </Header>

    {/*   <Form action="">
      <Input type="text" placeholder="Palabra" />
      <Input type="text" placeholder="Definicion" />
        <MainButton text={"Enviar"} />
        
      </Form> */}
{/* <Input type="text" placeholder="FILTRO" /> */}
      <Table>


        {wordArrays.map((words, index) => (
          <p key={index}>{words}</p>
        ))}


        <tbody>
          {words.map((words, index) => (
            <Row key={index}>
              <Cell $backgroundcolor="#111" $color="#a0c5fd">{index}</Cell>
              <Cell $uppercase="uppercase" $color="#a0c5fd">{words.word}</Cell>
              <Cell $color="#f8ebfe"> {words.clue}</Cell>
            </Row>
          ))}
        </tbody>
      </Table>
    </>
  );
}
