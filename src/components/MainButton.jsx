import React from 'react'
import CachedIcon from "@mui/icons-material/Cached";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Btn = styled.button`
  color: #fff;
  background-color: #064ebb;
  border-bottom: 5px solid #0b397e;
  border-right: 5px solid #0b397e;
  border-left: 1px solid #0b397e;
  border-top: 1px solid #0b397e;
  text-shadow: 1px 1px #0b397e;
  font-weight: 400;
  transition: 0.5s;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 12px 15px;
  width: 155px;
  cursor: pointer;
  border-radius: 20px;
  &:hover {
  filter: brightness(1.2);
    border-bottom: 5px solid;
    border-right: 5px solid;
    border-color: #0b397e;
  }
`;

const ReloadLogo = styled(CachedIcon)`
  animation: reload 1s;
  text-shadow: 2px 2px #14181d;
  rotate: 60deg;
  scale: 1.2;
  display: block;
  @keyframes reload {
    0% {
      rotate: 40deg;
    }
    100% {
      rotate: 420deg;
    }
  }
`;


export default function MainButton({text,color,onClick,logo,altLogo}) {
  return (
    <>
     <Btn onClick={onClick}>
{logo}
      {altLogo === true &&
        <ReloadLogo ></ReloadLogo>
      }
        
        
        {text}
      </Btn>
    
    
    </>
  )
}
