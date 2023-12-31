import React from "react";
import { words } from "../words";
import styled from "styled-components";
import WordCount from "../components/WordCount";
import LinkButton from "../components/ui/LinkButton";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import CheckBox from "../components/ui/CheckBox";

const Wrapper = styled.div`
margin-block: 3em;
`

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
background-color: #0b397e;
border-radius: 20px;
padding: 10px;
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
  @media (max-width: 700px) {
    width: auto;
  }
`;
const CountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  flex-grow: 1;
  background-color: #111;
  border: 2px solid #0b397e;
  padding: 10px 0px;
  text-transform: uppercase;
  flex-wrap: wrap;
  width: 14ch;
`;

const CheckBoxContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 1em;
margin-block: 1em;
flex-direction: column;
text-transform: uppercase;
`

export default function WordList() {
  const [includes, setIncludes] = useState(false)
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
  const wordIncludes = {};
  const wordCount = {};



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


  words.forEach((wordObj) => {
    const word = wordObj.word.toLowerCase(); // Convertir la palabra a minúsculas
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i].toLowerCase(); // Convertir la letra a minúsculas
      if (word.includes(letter)) {
        // Si la palabra contiene la letra, aumentar el contador correspondiente
        if (wordIncludes[letter]) {
          wordIncludes[letter]++;
        } else {
          wordIncludes[letter] = 1;
        }
      }
    }
  });


  const repeatedWords = [];

// Recorrer el array de palabras
words.forEach((wordObj) => {
  const word = wordObj.word.toLowerCase(); // Convertir la palabra a minúsculas
  if (wordCount[word]) {
    // Si la palabra ya se ha encontrado antes, aumentar el contador
    wordCount[word]++;
    if (!repeatedWords.includes(word)) {
      // Si la palabra aún no está en la lista de palabras repetidas, agregarla
      repeatedWords.push(word);
    }
  } else {
    // Si es la primera vez que se encuentra la palabra, inicializar el contador en 1
    wordCount[word] = 1;
  }
});


  function handleIncludes(){
    setIncludes(true)
    if(includes === true){
      setIncludes(false)
    }
  }
  

  return (
    <>
    <Wrapper>

      <Header>
        <LinkButton to={"/"} text={"Home"} logo={<HomeIcon> </HomeIcon>} />
        <WordCount text={"Palabras totales:"} />
      </Header>
      

  <CheckBoxContainer>
<CheckBox id={"includes"} checked={includes} onChange={handleIncludes}/>
<label htmlFor="includes">{includes ? "includes" : "starts"}</label>

  </CheckBoxContainer>


{ includes ?  <CountWrapper>
        {Object.keys(wordCountByLetter).map((letter) => (
          <CountContainer key={letter}>
            <p>{letter}</p>
            <p>{wordIncludes[letter]}</p>
          </CountContainer>
        ))}
      </CountWrapper> 


:  <CountWrapper>
{Object.keys(wordCountByLetter).map((letter) => (
  <CountContainer key={letter}>
    <p>{letter}</p>
    <p>{wordCountByLetter[letter]}</p>
  </CountContainer>
))}
</CountWrapper> }


<Table>
<tbody>
<CountWrapper>
  <CountContainer>
    {repeatedWords.map((word, index) => (
      <Row>
      <Cell key={index}> {word} </Cell>
      </Row>
    ))}
  </CountContainer>
  </CountWrapper> 
  </tbody>
  </Table>

  {/*     <Table>
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
      </Table> */}


  </Wrapper>
    </>
  );
}
