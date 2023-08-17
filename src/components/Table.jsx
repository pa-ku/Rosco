import React from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import { StatusContext } from "../context/StatusContext";
import { A, B, C, D, E } from "../data";
import Row from "./Row";



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
  background-color: #222;
`;

const CtnInfo = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 1em;
background-color: #111;
border-radius: 8px;
`

const TxtInfo = styled.p`
font-weight: 600;
font-size: 1.1em;
`

const FirstRow = styled.td`
background-color: #064ebb;
font-size: 1.1em;
font-weight: 600;
padding: 10px 20px;
border: 2px solid white;
text-transform: uppercase;
`

export default function Table() {
  const { wrongAnswers, rightAnswers,pending } = useContext(StatusContext);

  const [random, setRandom] = useState("");

  const respuesta = "respuesta";

  function load() {
    let roll = Math.floor(Math.random() * 100)
    setRandom(roll);
  }

  return (
    <>
   

      <Button onClick={load}>GENERAR</Button>
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
        <Row letter={"a"} ask={respuesta} answer={A[random]} />
        <Row letter={"b"} ask={respuesta} answer={B[random]} />
        <Row letter={"c"} ask={respuesta} answer={C[random]} />
        <Row letter={"d"} ask={respuesta} answer={D[random]} />
        <Row letter={"e"} ask={respuesta} answer={E[random]} />
      </Tabl>
    </>
  );
}
