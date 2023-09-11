import React from 'react'
import styled from 'styled-components'


const Checkbox = styled.input`
  -webkit-appearance: none;
  cursor: pointer;
  background-color: #efdeff;
  width: 35px;
  height: 20px;
  border-radius: 9px;
  position: relative;
  transition: 1s;
  outline: 2px solid #814fb3;
  &:hover {
    filter: brightness(1.1);
  }
  &:checked {
    background-color: #c791fd;
  }
  &::before {
    content: " ";
    position: absolute;
    width: 14px;
    height: 14px;
    top: 3px;
    right: 19px;
    border-radius: 100%;
    background-color: #c791fd;
    animation: 700ms unCheked;
  }
  &:checked::before {
    animation: 600ms cheked forwards;
  }
  @keyframes cheked {
    50% {
      width: 17px;
    }

    100% {
      right: 3px;
      width: 14px;
      background-color: #ffffff;
    }
  }
  @keyframes unCheked {
    0% {
      right: 5px;
    }
    50% {
      width: 17px;
    }
    100% {
      right: 19px;
      background-color: #c791fd;
    }
  }
`;

export default function CheckBox({checked,onChange,onClock,id}) {
  return (
  <>
      <Checkbox 
              checked={checked}
              onChange={onChange}
              onClick={onClock}
              id={id}
              type="checkbox"
            />
  
  </>
  )
}
