import React from "react";
import styled from "styled-components";
import { useContext, useMemo, useState } from "react";
import { GameContext } from "../context/GameContext";
import { words } from "../words";
import TableRow from "./TableRow";

import FirstTableRow from "./FirstTableRow";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 5em;
`;
const Tabl = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  background-color: #111;
  font-size: 0.9em;
  text-align: center;
  border-radius: 8px;
  border: 2px solid #1c2128;
  @media (max-width: 700px) {
    border: 0px;
    border-radius: 0px;
  }
`;

const RowComponent = React.memo(({ letter, question, answer, tableA }) => {
  return (
    <TableRow
      letter={letter}
      question={question}
      answer={answer}
      tableA={tableA}
    />
  );
});
export default function Table({ tableA }) {
  const { settings } = useContext(GameContext);
  const [breakCounter, setBreakCounter] = useState(0);

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
    /*   "k", */
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
    /* "w", */
    /*   "x", */
    /* "y", */
    "z", 
  ];

const arr = []

  //CREAR ROLL 0-9
  function roll9() {
    return Math.floor(Math.random() * 9);
  }

  //FILTRO PARA CONTIENE
  function handleFilter(letter) {
    if (roll9() < settings.rollChance && settings.containsWords > breakCounter) {
      setBreakCounter(breakCounter + 1);
      const choosedWord = words.filter((item) => item.word.toLowerCase().includes(letter));
      return choosedWord
    } 
    else {
      if (letter === 'z') {
        return words.filter((item) => item.word.toLowerCase().includes(letter));
      } 
      if (letter === 'h') {
        return words.filter((item) => item.word.toLowerCase().includes(letter));
      } 
      
      else {
        return words.filter((item) => item.word.toLowerCase().startsWith(letter));
      }
    }
  }

  //TIRAR UN NUMERO PARA EL ARRAY
  const rollNumber = (length) => {
    return Math.floor(Math.random() * length);
  };

  const wordArrays = letters.map((letter) => handleFilter(letter));

  const randomNumbers = wordArrays.map((arr) => rollNumber(arr.length));

  //PREGUNTA
  const handleAsk = (index) => {
    return wordArrays[index][randomNumbers[index]].clue;
  };

  //RESPUESTA
  const handleAnswer = (index) => {
    const choosedAnswer = wordArrays[index][randomNumbers[index]].word;
    arr.push(choosedAnswer)

    return choosedAnswer
  };

  //USE MEMO PARA EVITAR EL RE-RENDERIZADO DE LOS COMPONENTES
  const rowComponents = useMemo(() => {
    return letters.map((letter, index) => (
      <RowComponent
        tableA={tableA}
        key={index}
        letter={letter}
        question={handleAsk(index)}
        answer={handleAnswer(index)}
      />
    ));
  }, []);

  return (
    <>
      <>
        <Wrapper>
          
          <Tabl >
            <tbody >
              <FirstTableRow />
              {rowComponents}
            </tbody>
          </Tabl>
        </Wrapper>
      </>
    </>
  );
}
