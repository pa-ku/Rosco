import React from 'react'
import styled from "styled-components";

const TxtInfo = styled.p`
  font-weight: 600;
  font-size: 1.1em;
  padding: 20px;
  color: ${(props) => props.$infocolor};
  @media (max-width: 700px) {
    padding: 5px;
  }
`;

const CtnInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  position: sticky;
  top: 0px;
  background-color: #111;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  color: #a0c5fd;

  @media (max-width: 700px) {
    font-size: 1em;
    padding: 0.5em 2em;
    border: 0px;
    border-radius: 0px;
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
