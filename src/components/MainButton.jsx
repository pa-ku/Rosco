import React from 'react'
import CachedIcon from "@mui/icons-material/Cached";
import styled from "styled-components";

const Btn = styled.button`
  color: #fff;
  background-color: #064ebb;
  border-bottom: 5px solid #0b397e;
  border-right: 5px solid #0b397e;
  text-shadow: 1px 1px #0b397e;
  font-weight: 400;
  transition: 0.5s;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 7px;
  padding: 12px 18px;
  margin-block: 2em;

  display: ${(props) => props.$btndisplay};
  &:hover {
    background-color: #0b57c9;
    border-bottom: 5px solid;
    border-right: 5px solid;
    border-color: #184c99;
  }
`;

const ReloadLogo = styled(CachedIcon)`
  animation: reload 1s;
  text-shadow: 2px 2px #14181d;
  rotate: 60deg;
  scale: 1.2;
  @keyframes reload {
    0% {
      rotate: 40deg;
    }
    100% {
      rotate: 420deg;
    }
  }
`;


export default function MainButton({txt,onClick,btndisplay}) {
  return (
    <>
     <Btn $btndisplay={btndisplay} onClick={onClick}>
        <ReloadLogo></ReloadLogo>
        
        {txt}
      </Btn>
    
    
    </>
  )
}
