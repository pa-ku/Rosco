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
 
  @media (max-width: 700px) {
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
  @media (max-width: 700px) {
    padding: 5px;
  }
`;

const Answer = styled.td`

  border: 2px solid #1c2128;
  text-align: center;
  text-transform: uppercase;
 
  font-weight: 800;
  letter-spacing: 2px;
  font-size: 1em;
  color: floralwhite;
  background-color: #373e47;
  background-color: ${(props) => props.backg};

  z-index: 5;
 
  @media (max-width: 700px) {
    padding-top: 5px;

  }
`;

const CtnButton = styled.div`
  display: flex;
  margin-inline: 0.5em;
  animation: ButtonShow 1s;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;

  & * {
    border: 4px solid #373e47;
  }
  @media (max-width: 700px) {
    margin-inline: 5px;
    padding: 0px;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 5px;
    padding-block: 5px;
    & * {
      border: 0px;
      padding: 10px 15px;
    }
  }

  @keyframes ButtonShow {
   0%{
    opacity: 0;
    translate: -25px;
   }
   100%{
    opacity: 1;
    translate: 0px;
   } 
  }
`;



const RightBtn = styled.button`
  background-color: ${(props) => (props.backgcheck ? "#555" : "#61a002")};
  border-bottom: 2px solid #497901;
  border-right: 2px solid #497901;
  border-top: 1px solid #497901;
  border-left: 1px solid #497901;
  &:hover {
    background-color: ${(props) => (props.backgcheck ? "#555" : "#acf144")};
  }
  @media (max-width: 700px) {
  }
`;



const PassBtn = styled.button`
  background-color: ${(props) => (props.backgcheck ? "#555" : "#888")};
  border-bottom: 2px solid #555;
  border-right: 2px solid #555;
  border-top: 1px solid #555;
  border-left: 1px solid #555;



  &:hover {
    background-color: ${(props) => (props.backgcheck ? "#555" : "#6b6b6b")};
  }
`;





const WrongBtn = styled.button`
  background-color: ${(props) => (props.backgcheck ? "#555" : "#c71717")};
  border-bottom: 2px solid #8d0a0a;
  border-right: 2px solid #8d0a0a;
  border-top: 1px solid #8d0a0a;
  border-left: 1px solid #8d0a0a;

  &:hover {
    background-color: ${(props) => (props.backgcheck ? "#555" : "#ff5a5a")};
  }
`;

const Tr = styled.tr`
  width: 100%;
  cursor: pointer;
  &:hover{
    outline: 2px solid #3c4450;
  }
`;


export default function Row({ letter, ask, answer }) {
  const [color, setColor] = useState();
  const [disable, setDisable] = useState();
const [show, setShow] = useState()

  const {
    wrongAnswers,
    setWrongAnswers,
    rightAnswers,
    setRightAnswers,
    pending,
    setPending,
  } = useContext(StatusContext); //acceder al contexto, y al value

  const right = () => {
    setColor("#2c462e");
    setRightAnswers(rightAnswers + 1);
    setDisable(true);

    if (pending > 0) {
      setPending((prevPending) => pending - 1);
    }
  };

  const pass = () => {
    setColor("#4a5058");
    setPending((prevPending) => pending + 1);
  };

  const wrong = () => {
    setColor("#4d2626");
    setDisable(true);
    setWrongAnswers((prevWrongAnswers) => wrongAnswers + 1);
    if (pending > 0) {
      setPending((prevPending) => pending - 1);
    }
  };


  return (
    <>
      <Tr>
        <Letter>
        {letter}
       
          
          
          
          </Letter>
        <Ask backg={color}>{ask}</Ask>
        <Answer backg={color}>
          {answer}
        <CtnButton>
          <RightBtn disabled={disable} backgcheck={disable} onClick={right}>
            ✔
          </RightBtn>
          <WrongBtn disabled={disable} backgcheck={disable} onClick={wrong}>
            ✖
          </WrongBtn>
          <PassBtn disabled={disable} backgcheck={disable} onClick={pass}>
            ⦿
          </PassBtn>
        </CtnButton>
       
        </Answer>
        </Tr>
    
      
    </>
  );
}

