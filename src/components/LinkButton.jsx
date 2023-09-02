import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';

const Button = styled(Link)`
background-color: #064ebb;
color: white;
display: flex;
align-items: center;
justify-content: center;
border-bottom: 5px solid #0b397e;
  border-right: 5px solid #0b397e;
  border-left: 1px solid #0b397e;
  border-top: 1px solid #0b397e;
  text-shadow: 1px 1px #0b397e;
  border-color: #0b397e;
  padding: 12px 15px;
  width: 155px;
  font-size: 1.5em;
  font-weight: 400;
  border-radius: 20px;
gap: 5px;
&:hover{
  filter: brightness(1.2);
  color: white;
}
`

export default function LinkButton() {
  return (
    <Button to={"/"}> <HomeIcon></HomeIcon>Home</Button>
  )
}
