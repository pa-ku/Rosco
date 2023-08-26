import React from 'react'
import styled from "styled-components";
import { words } from "../words";

const Text = styled.p`
padding: 10px 20px;
color: #be94e8;
`

export default function WordCount({ text }) {
    const wordCount = words.length;
  return (
    <Text>{text} {wordCount}</Text>
  )
}
