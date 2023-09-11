import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`
  background-color: #064ebb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid;
  border-right: 5px solid;
  border-left: 1px solid;
  border-top: 1px solid;
  text-shadow: 1px 1px #0b397e;
  border-color: #0b397e;
  padding: 10px 28px;
  width: 170px;
  font-size: 1.5em;
  font-weight: 400;
  border-radius: 20px;
  gap: 5px;
 
  &:hover {
    filter: brightness(1.2);
    color: white;
  }
`;

export default function LinkButton({ text, onClick, logo, to }) {
  return (
    <Button onClick={onClick} to={to}>
      {logo}
      {text}
    </Button>
  );
}
