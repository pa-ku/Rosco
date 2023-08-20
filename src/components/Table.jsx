import React from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import { StatusContext } from "../context/StatusContext";
import { A, B, C, D, E, F,G,H,I,J,K ,L,M,N,O,P,Q,R,S,T,U,V,W,Y,Z } from "../data";
import Row from "./Row";


export default function Table() {
  const { wrongAnswers, rightAnswers, pending } = useContext(StatusContext);

  const [roll, setRoll] = useState(0)
  const [rollStatus, setRollStatus] = useState(false)

function start(){
  setRoll(Math.floor(Math.random()* 50))
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
        <TxtInfo color="#acf144" >✔ {rightAnswers}</TxtInfo>
        <TxtInfo color="#ff5a5a" >✖: {wrongAnswers}</TxtInfo>
        <TxtInfo color="#b9b9b9" >PASS: {pending}</TxtInfo>
      </CtnInfo>
      <Tabl>
         <tr>
          <FirstRow>Word</FirstRow>
          <FirstRow>Question</FirstRow>
          <FirstRow>Answer</FirstRow>
        </tr>
        <Row letter={"A"} ask={A[roll].significado} answer={A[roll].palabra} />
        <Row letter={"B"} ask={B[roll].significado} answer={B[roll].palabra} /> 
        <Row letter={"C"} ask={C[roll].significado} answer={C[roll].palabra} />
        <Row letter={"D"} ask={D[roll].significado} answer={D[roll].palabra} />
        <Row letter={"E"} ask={E[roll].significado} answer={E[roll].palabra} />
        <Row letter={"F"} ask={F[roll].significado} answer={F[roll].palabra} />
        <Row letter={"G"} ask={G[roll].significado} answer={G[roll].palabra} />
        <Row letter={"H"} ask={H[roll].significado} answer={H[roll].palabra} />
        <Row letter={"I"} ask={I[roll].significado} answer={I[roll].palabra} />
        <Row letter={"J"} ask={J[roll].significado} answer={J[roll].palabra} />
        <Row letter={"k"} ask={K[roll].significado} answer={K[roll].palabra} />
        <Row letter={"L"} ask={L[roll].significado} answer={L[roll].palabra} />
        <Row letter={"M"} ask={M[roll].significado} answer={M[roll].palabra} />
        <Row letter={"N"} ask={N[roll].significado} answer={N[roll].palabra} />
        <Row letter={"O"} ask={O[roll].significado} answer={O[roll].palabra} />
        <Row letter={"P"} ask={P[roll].significado} answer={P[roll].palabra} />
        <Row letter={"Q"} ask={Q[roll].significado} answer={Q[roll].palabra} />
        <Row letter={"R"} ask={R[roll].significado} answer={R[roll].palabra} />
        <Row letter={"S"} ask={S[roll].significado} answer={S[roll].palabra} />
        <Row letter={"T"} ask={T[roll].significado} answer={T[roll].palabra} />
        <Row letter={"U"} ask={U[roll].significado} answer={U[roll].palabra} />
        <Row letter={"V"} ask={V[roll].significado} answer={V[roll].palabra} />
        <Row letter={"W"} ask={W[roll].significado} answer={W[roll].palabra} />
        <Row letter={"Y"} ask={Y[roll].significado} answer={Y[roll].palabra} />
        <Row letter={"Z"} ask={Z[roll].significado} answer={Z[roll].palabra} />
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
  color: ${props => props.color};
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
