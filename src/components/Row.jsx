import React from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import { StatusContext } from "../context/StatusContext";

const Ask = styled.td`
  border: 1px solid #c7c7c7;
  padding: 8px;
  text-align: center;
  padding-inline: 2em;
  background-color: #333;
`;

const Answer = styled.td`
  border: 1px solid #c7c7c7;
  padding: 8px;
  text-align: center;
  text-transform: uppercase;
  padding-inline: 1em;
  background-color: #333;
  background-color: ${(props) => props.backg};
  @media(max-width:700px){
    
  }
`;
const Letter = styled.td`
  border: 1px solid #c7c7c7;
  padding: 8px;
  padding-inline: 1em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  color: #befd95;
  background-color: #333;
  @media(max-width:700px){
  padding: 0px;
  }
`;

const CtnButton = styled.div`
  display: flex;

  margin-left: 1em;
 @media(max-width:700px){
  margin-left: 0em;
padding: 2em 0em;
  flex-direction: column;

  }
`;

const RightBtn = styled.button`
  border: 4px solid #242424;
  background-color: ${(props) => (props.backgcheck ? "#555" : "#77c700")};
  &:hover {
    background-color: ${(props) => (props.backgcheck ? "#555" : "#acf144")};
  }
`;
const PassBtn = styled.button`
  border: 4px solid #242424;
  background-color: ${(props) => (props.backgcheck ? "#555" : "#3f3f3f")};
  &:hover {
    background-color: ${(props) => (props.backgcheck ? "#555" : "#6b6b6b")};
  }
`;
const WrongBtn = styled.button`
  background-color: ${(props) => (props.backgcheck ? "#555" : "#ff0000")};
  border: 4px solid #242424;
  &:hover {
    background-color: ${(props) => (props.backgcheck ? "#555" : "#ff5a5a")};
  }
`;


const Tr = styled.tr`
width: 100%;
`

export default function Row({ letter, ask, answer }) {
  const [color, setColor] = useState();
  const [disable, setDisable] = useState();

  const {
    wrongAnswers,
    setWrongAnswers,
    rightAnswers,
    setRightAnswers,
    pending,
    setPending,
  } = useContext(StatusContext); //acceder al contexto, y al value

  const right = () => {
    setColor("#528800");
    setRightAnswers(rightAnswers + 1);
    setDisable(true);

    if (pending > 0) {
      setPending((prevPending) => pending - 1);
    }
  };

  const pass = () => {
    setColor("#666666");
    setPending((prevPending) => pending + 1);
  };

  const wrong = () => {
    setColor("#b92424");
    setDisable(true);
    setWrongAnswers((prevWrongAnswers) => wrongAnswers + 1);
    if (pending > 0) {
      setPending((prevPending) => pending - 1);
    }
  };

  return (
    <>
      <Tr>
        <Letter>{letter}</Letter>
        <Ask>{ask}</Ask>
        <Answer backg={color}>{answer}</Answer>

        <CtnButton>
          <RightBtn disabled={disable} backgcheck={disable} onClick={right}>
            ✔
          </RightBtn>
          <PassBtn disabled={disable} backgcheck={disable} onClick={pass}>
            PASS
          </PassBtn>
          <WrongBtn disabled={disable} backgcheck={disable} onClick={wrong}>
            ✖
          </WrongBtn>
        </CtnButton>
      </Tr>
    </>
  );
}
