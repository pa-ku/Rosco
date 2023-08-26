import React from 'react'
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 500;
  text-shadow: 3px 1px #064ebb;
  padding-top: 1em;

  @media (max-width: 700px) {
    font-size: 2.5em;
  }
`;
export default function MainTitle({ text }) {
  return (
   <Title>{text}</Title>
  )
}
