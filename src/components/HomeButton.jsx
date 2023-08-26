import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';

const Button = styled(Link)`
background-color: #064ebb;
color: white;
padding: 10px 15px;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
width: 100px;
gap: 5px;
`

export default function HomeButton() {
  return (
    <Button to={"/"}> <HomeIcon></HomeIcon>Home</Button>
  )
}
