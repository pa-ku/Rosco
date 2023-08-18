import React from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import { StatusContext } from "../context/StatusContext";
import { A, B, C, D, E, F,G,H,I,J,K } from "../data";
import Row from "./Row";


export default function Table() {
  const { wrongAnswers, rightAnswers, pending } = useContext(StatusContext);

  const [roll, setRoll] = useState(0)
  const [rollStatus, setRollStatus] = useState(false)
 
function start(){
  setRoll(Math.floor(Math.random()*A.length))
  setRollStatus(true)
}

  return (
    <>
    <Button onClick={()=>start()}>GENERAR</Button>
      
      

       { rollStatus  === true  && 

       <>
       <Wrapper>
       <CtnInfo>
        <TxtInfo>Correctas: {rightAnswers}</TxtInfo>
        <TxtInfo>Incorrectas: {wrongAnswers}</TxtInfo>
        <TxtInfo>Pendientes: {pending}</TxtInfo>
      </CtnInfo>
      <Tabl>
         <tr>
          <FirstRow>Letra</FirstRow>
          <FirstRow>PREGUNTA</FirstRow>
          <FirstRow>Respuesta</FirstRow>
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
  background-color: #064ebb;
  color: #fff;
  font-weight: 700;
`;

const Tabl = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  background-color: #111;
`;

const CtnInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  background-color: #111;
  border-radius: 8px;
  width: 100%;
  text-align: center;
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
  background-color: #064ebb;
  font-size: 1.1em;
  font-weight: 600;
  padding: 10px 20px;
  border: 2px solid white;
  text-transform: uppercase;
  @media(max-width:700px){
  padding: 2px;
  }
`;
