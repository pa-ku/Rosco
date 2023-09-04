import React from 'react'
import styled from "styled-components";

const CtnInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  position: sticky;
  top: 0px;
  background-color: #111;

  width: 100%;
  text-align: center;
  outline: 2px solid #111;
  color: #a0c5fd;
  z-index: 100;
  padding: 0.8em 2em;
  border-bottom: 2px solid #1c2128;
  @media (max-width: 700px) {
    font-size: 1em;
    border: 0px;
    border-radius: 0px;
    padding: 0.1em 2em;
  }
`;

const TxtInfo = styled.p`
  font-weight: 600;
  font-size: 1.1em;
  color: ${(props) => props.$infocolor};
  @media (max-width: 700px) {
    padding: 5px;
  }
`;


export default function TableInfo({rightAnswers,wrongAnswers,pending}) {
  return (
    <>
    
    <CtnInfo>
    <TxtInfo $infocolor="#acf144">✔ {rightAnswers}</TxtInfo>
    <TxtInfo $infocolor="#ff5a5a">✖ {wrongAnswers}</TxtInfo>
    <TxtInfo $infocolor="#b9b9b9">PASS {pending}</TxtInfo>
  </CtnInfo>

    </>
  )
}
