import React from "react";
import styled from "styled-components";
import AbcIcon from '@mui/icons-material/Abc';
const FirstRow = styled.td`
  background-color: #111;

  font-size: 1.1em;
  color: #a0c5fd;
  font-weight: 600;
  padding: 10px 20px;
  text-transform: uppercase;
  @media (max-width: 700px) {
    padding: 2px;
    padding-block: 0.8em;
    font-size: 0.9em;
  }
`;

export default function FirstTableRow() {
  return (
    <>
      <tr>
        <FirstRow></FirstRow>
        <FirstRow>Question</FirstRow>
        <FirstRow></FirstRow>
      </tr>
    </>
  );
}
