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
  background-color: ${(props) => props.BackG};
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
`;

const CtnButton = styled.div`
  display: flex;
  margin-left: 1em;
`;

const RightBtn = styled.button`
  border: 4px solid #242424;
  background-color: ${props => props.BackGCheck ? '#555' : '#77c700'};
  &:hover {
    background-color:${props => props.BackGCheck ? '#555' : '#acf144'};
  }
`;
const PassBtn = styled.button`
  border: 4px solid #242424;
  background-color: ${props => props.BackGCheck ? '#555' : '#e035e0'};
  &:hover {
    background-color: ${props => props.BackGCheck ? '#555' : '#fd67fd'};
  }
`;
const WrongBtn = styled.button`

  background-color: ${props => props.BackGCheck ? '#555' : '#ff0000'};
  border: 4px solid #242424;
  &:hover {
    
      background-color: ${props => props.BackGCheck ? '#555' : '#ff5a5a'};
  }
`;

export default function Row({ letter, ask, answer }) {
  
  const [color, setColor] = useState()
  const [disable, setDisable] = useState(false);


    const {
    wrongAnswers,
    setWrongAnswers,
    rightAnswers,
    setRightAnswers,
    pending,
    setPending,
  } = useContext(StatusContext); //acceder al contexto, y al value

  function right() {
    setColor("#528800");
    setRightAnswers(rightAnswers + 1);
    setDisable(true)

    if(pending > 0){

        setPending((prevPending) => pending - 1);
    }
  }

  function pass() {
    setColor("#666666");
    setPending((prevPending) => pending + 1);
  }

  function wrong() {
    setColor("#b92424");
    setDisable(true)
    setWrongAnswers((prevWrongAnswers) => wrongAnswers + 1);
    if(pending > 0){

        setPending((prevPending) => pending - 1);
    }
  }

  return (
    <>
      <tr>
        <Letter>{letter}</Letter>
        <Ask >{ask}</Ask>
        <Answer BackG={color}>{answer}</Answer>

        <CtnButton>
          <RightBtn  disabled={disable} BackGCheck={disable} onClick={right}>✔</RightBtn>
          <PassBtn disabled={disable} BackGCheck={disable} onClick={pass}>O</PassBtn>
          <WrongBtn disabled ={disable} BackGCheck={disable} onClick={wrong}>X</WrongBtn>
        </CtnButton>
      </tr>
    </>
  );
}
