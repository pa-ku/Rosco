import React from 'react'
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 3em;
  font-weight: 500;
  text-shadow: 3px 1px #064ebb;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 2.5em;
  }
`;
export default function Title({ text }) {
  return (
   <H1>{text}</H1>
  )
}
