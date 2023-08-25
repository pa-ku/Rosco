import React from "react";
import styled from "styled-components";
import { useState, useContext, useMemo, useCallback } from "react";
import { StatusContext } from "../context/StatusContext";
import { words } from "../words";
import Row from "./Row";
import MainButton from "./MainButton";
import TableInfo from "./TableInfo";
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
  border-radius: 8px;
  border: 2px solid #1c2128;
  @media (max-width: 700px) {
    border: 0px;
    border-radius: 0px;
  }
`;

const RowComponent = React.memo(({ letter, question, answer }) => {
  return <Row letter={letter} question={question} answer={answer} />;
});
export default function Table() {
  const { wrongAnswers, rightAnswers, pending } = useContext(StatusContext);
  const [rollStatus, setRollStatus] = useState(false);
  const [disableButton, setDisableButton] = useState();

  const filterWords = useMemo(() => {
    return (words, letter) => {
      return words.filter((item) =>
        item.palabra.toLowerCase().includes(letter)
      );
    };
  }, []);

  const rollNumber = useMemo(() => {
    return (length) => {
      return Math.floor(Math.random() * length);
    };
  }, []);

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
  const wordArrays = letters.map((letter) => filterWords(words, letter));
  const randomNumbers = wordArrays.map((arr) => rollNumber(arr.length));

  function reload() {
    setRollStatus(true);
    setDisableButton("none");
  }

  const handleAsk = (index, letter) => {
    return wordArrays[index][randomNumbers[index]].significado;
  };
  const handleAnswer = (index, letter) => {
    return wordArrays[index][randomNumbers[index]].palabra;
  };

  const rowComponents = useMemo(() => {
    return letters.map((letter, index) => (
      <RowComponent
        key={index}
        letter={letter}
        question={handleAsk(index, letter)}
        answer={handleAnswer(index, letter)}
      />
    ));
  }, []);

  return (
    <>
      <MainButton txt="ROLL" onClick={reload} btndisplay={disableButton} />

      {rollStatus === true && (
        <>
          <MainButton txt="Restart" onClick={() => window.location.reload()} />
          <Wrapper>
            <TableInfo
              rightAnswers={rightAnswers}
              wrongAnswers={wrongAnswers}
              pending={pending}
            />

            <Tabl>
              <tbody>
                <FirstTableRow />
                {rowComponents}
              </tbody>
            </Tabl>
          </Wrapper>
        </>
      )}
    </>
  );
}
