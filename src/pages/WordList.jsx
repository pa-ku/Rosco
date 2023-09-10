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
  width: 100%;
`;
const Row = styled.tr`
  background-color: #00193e29;
`;
const Cell = styled.td`
  border: 1px solid #0b397e;
padding-block: 20px;

  color: ${(props) => props.$color};
text-align: center;
  text-transform: ${(props) => props.$uppercase};
  background-color: ${(props) => props.$backgroundcolor};
  font-weight: 600;

  @media (max-width: 700px) {
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
const CountWrapper = styled.div`
display: flex;
flex-wrap: wrap;

align-items: center;
justify-content: center;
flex-grow: 1;
margin: auto;
width: 70ch;
margin-bottom: 4em;
@media(max-width:700px){
width: auto;
}
`
const CountContainer  = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 1em;
flex-grow: 1;
background-color: #111;
border: 2px solid #0b397e;
padding: 10px 0px;
text-transform: uppercase;
width: 14ch;

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

  const wordCountByLetter = {};

  // Iterar a través de las palabras y contar cuántas comienzan con cada letra
  words.forEach((wordObj) => {
    const firstLetter = wordObj.word.charAt(0).toLowerCase(); // Obtener la primera letra en minúscula
    if (letters.includes(firstLetter)) {
      if (wordCountByLetter[firstLetter]) {
        wordCountByLetter[firstLetter]++;
      } else {
        wordCountByLetter[firstLetter] = 1;
      }
    }
  });

  return (
    <>
      <Title text={"WORD LIST"} />

      <Header>
        <LinkButton to={"/"} text={"Home"} logo={<HomeIcon> </HomeIcon>} />
        <WordCount text={"Palabras totales:"} />
      </Header>

      <CountWrapper>
          {Object.keys(wordCountByLetter).map((letter) => (
            
            <CountContainer key={letter}>
              <p>{letter}</p>
              <p>{wordCountByLetter[letter]}</p>
            </CountContainer>
          
          ))}
   </CountWrapper>
      <Table>
        <tbody>
          {words.map((words, index) => (
            <Row key={index}>
              <Cell $backgroundcolor="#111" $color="#a0c5fd">
                {index}
              </Cell>
              <Cell $uppercase="uppercase" $color="#a0c5fd">
                {words.word}
              </Cell>
              <Cell $color="#f8ebfe"> {words.clue}</Cell>
            </Row>
          ))}
        </tbody>
      </Table>
    </>
  );
}
