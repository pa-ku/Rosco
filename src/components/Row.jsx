import React from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import { StatusContext } from "../context/StatusContext";


const Letter = styled.td`
  border: 2px solid #1c2128;
  padding: 8px;
  padding-inline: 1em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  color: #befd95;
  background-color: #22272e;

  @media(max-width:700px){
  padding-inline: 20px;
  }
`;


const Ask = styled.td`
  border: 2px solid #1c2128;
  padding: 8px;
  text-align: center;
  padding-inline: 2em;
  background-color: #373e47;
  color: floralwhite;
  background-color: ${(props) => props.backg};
  @media(max-width:700px){
  padding: 5px;
  }
`;

const Answer = styled.td`
  border: 2px solid #1c2128;
  padding: 8px;
  text-align: center;
  text-transform: uppercase;
  padding-inline: 1em;
  color: floralwhite;
  background-color: #373e47;
  background-color: ${(props) => props.backg};
  
  @media(max-width:700px){
    padding: 5px;
  }
`;

const CtnButton = styled.div`
  display: flex;
  margin-inline: 0.5em;

  & *{
    border: 4px solid #120f25;

  }
 @media(max-width:700px){
  margin-inline: 5px;
  padding: 0px;
  flex-direction: column;
  font-size: 0.8em;
  gap: 5px;
  padding-block: 2em;
  & *{
  border: 0px;
  padding: 10px 15px;
}}
`;

const RightBtn = styled.button`
  background-color: ${(props) => (props.backgcheck ? "#555" : "#61a002")};
  &:hover {
    background-color: ${(props) => (props.backgcheck ? "#555" : "#acf144")};
  }
  @media(max-width:700px){
  
  }
`;
const PassBtn = styled.button`
  background-color: ${(props) => (props.backgcheck ? "#555" : "#3f3f3f")};
  &:hover {
    background-color: ${(props) => (props.backgcheck ? "#555" : "#6b6b6b")};
  }

`;
const WrongBtn = styled.button`
  background-color: ${(props) => (props.backgcheck ? "#555" : "#ff0000")};
  
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
        <Ask backg={color}>{ask}</Ask>
        <Answer backg={color}>{answer}</Answer>

        <CtnButton>
          <RightBtn disabled={disable} backgcheck={disable} onClick={right}>
            ✔
          </RightBtn>
          <PassBtn disabled={disable} backgcheck={disable} onClick={pass}>
            O
          </PassBtn>
          <WrongBtn disabled={disable} backgcheck={disable} onClick={wrong}>
            ✖
          </WrongBtn>
        </CtnButton>
      </Tr>
    </>
  );
}
