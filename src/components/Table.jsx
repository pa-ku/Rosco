import React from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import { StatusContext } from "../context/StatusContext";
import { A, B, C, D, E, F,G,H,I,J,K ,L } from "../data";
import Row from "./Row";


export default function Table() {
  const { wrongAnswers, rightAnswers, pending } = useContext(StatusContext);

  const [roll, setRoll] = useState(0)
  const [rollStatus, setRollStatus] = useState(false)
 
function start(){
  setRoll(Math.floor(Math.random()* 17))
  setRollStatus(true)
  console.log(roll);
}

  return (
    <>
    <Button onClick={()=>start()}>GENERAR</Button>
      
      

       { rollStatus  === true  && 

       <>
       <Wrapper>
       <CtnInfo>
        <TxtInfo>✔ {rightAnswers}</TxtInfo>
        <TxtInfo>Pass {wrongAnswers}</TxtInfo>
        <TxtInfo>✖ {pending}</TxtInfo>
      </CtnInfo>
      <Tabl>
         <tr>
          <FirstRow>Word</FirstRow>
          <FirstRow>Question</FirstRow>
          <FirstRow>Answer</FirstRow>
        </tr>
       <Row letter={"a"} ask={A[roll].significado} answer={A[roll].palabra} />
        <Row letter={"b"} ask={B[roll].significado} answer={B[roll].palabra} /> 
        <Row letter={"c"} ask={C[roll].significado} answer={C[roll].palabra} />
        <Row letter={"d"} ask={D[roll].significado} answer={D[roll].palabra} />
        <Row letter={"e"} ask={E[roll].significado} answer={E[roll].palabra} />
        <Row letter={"f"} ask={F[roll].significado} answer={F[roll].palabra} />
        <Row letter={"g"} ask={G[roll].significado} answer={G[roll].palabra} />
        <Row letter={"h"} ask={H[roll].significado} answer={H[roll].palabra} />
        <Row letter={"i"} ask={I[roll].significado} answer={I[roll].palabra} />
        <Row letter={"k"} ask={K[roll].significado} answer={K[roll].palabra} />
        <Row letter={"L"} ask={L[roll].significado} answer={L[roll].palabra} />
        </Tabl>
        </Wrapper>
       </>
        }
    </>
  );
}


const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

const Button = styled.button`
  margin-bottom: 2em;
  color: #fff;
  background-color: #064ebb;
  border: 5px solid #0b397e;
  font-weight: 400;
  transition: 0.5s;
  margin-top: 1em;
&:hover{
  background-color: #0b57c9;
  border: 5px solid #184c99;
}
`;

const Tabl = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  background-color: #120f25;
  font-size: 0.9em;
  border-radius: 8px;
  border: 2px solid #1c2128;
`;

const CtnInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  position: sticky;
  top: 0px;
  background-color: #120f25;
    border-radius: 8px;
    border: 2px solid #1c2128;
  width: 100%;
  text-align: center;
  color: #a0c5fd;

  @media(max-width:700px){
    font-size: 1em;
    padding: 0.5em  2em;
  }
`;

const TxtInfo = styled.p`
  font-weight: 600;
  font-size: 1.1em;
  padding: 20px;
  @media(max-width:700px){
  padding: 5px;
  }
`;

const FirstRow = styled.td`
  background-color: #120f25;
  border-radius: 2px solid #333;
  font-size: 1.1em;
  color: #a0c5fd;
  font-weight: 600;
  padding: 10px 20px;
  border: 2px solid #1c2128;
  text-transform: uppercase;
  @media(max-width:700px){
  padding: 2px;
  padding-block: 0.8em;
  font-size: 0.9em;
  }
`;
