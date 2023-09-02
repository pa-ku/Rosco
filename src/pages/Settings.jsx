import React from "react";
import LinkButton from "../components/LinkButton";
import styled from "styled-components";
import Title from "../components/Title";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3em;
`;

const OptionCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1em;
  opacity: 0;
  animation: 1s start forwards;
`;

const Label = styled.label`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.1rem;
`;
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
  &:hover{

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
    
    50%{
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
    50%{
      width: 17px;
    }
    100% {
      right: 19px;
      background-color: #c791fd;
    }
  }
`;



const OptionWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  margin: auto;
`;

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  background-color: #c4c4c4;
  border-bottom: 5px solid;
  border-right: 5px solid;
  border-left: 1px solid;
  border-top: 1px solid;
  text-shadow: 1px 1px;
  border-color: #717171;
  padding: 5px 12px;
  color: #222;
  font-size: 1.3rem;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;

  &:hover {
    filter: brightness(1.1);
  }
  &:checked {
    background-color: #d5adfd;
    border-color: #a579d2;
  }
  &:nth-child(1)::before {
    content: "Easy";
  }
  &:nth-child(2)::before {
    content: "Normal";
  }
  &:nth-child(3)::before {
    content: "Hard";
  }
`;

const ModeCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #dfbeff;
  gap: 1em;
`;

export default function Settings() {
  const [mode, setMode] = useState("normal");

  function modeHandler(event) {
    setMode(prevMode => event.target.value);
  }

  return (
    <>
      <Wrapper>
        <Title text={"SETTINGS"} />

        <OptionWrapper>
          <OptionCtn>
            <Checkbox checked="cheked" id="Option1" type="checkbox" />
            <Label htmlFor="Option1">Words containing the letter</Label>
          </OptionCtn>
          <OptionCtn>
            <Checkbox id="Option2" type="checkbox" />
            <Label htmlFor="Option2">Sound</Label>
          </OptionCtn>
        </OptionWrapper>
        <ModeCtn>
          <BtnContainer>
            <Input
              id="easy"
              name="mode"
              type="radio"
              value={"easy"}
              onChange={modeHandler}
            />
            <Input
              name="mode"
              type="radio"
              value={"normal"}
              onChange={modeHandler}
              defaultChecked 
            />
            <Input
              name="mode"
              type="radio"
              value={"hard"}
              onChange={modeHandler}
            />
          </BtnContainer>
          {mode === "easy" && (
            <p>
              Palabras Faciles, para debiles e indesisos. no hay palabras que
              contengan
            </p>
          )}
          {mode === "normal" && <p> 20% de que contengan la letra</p>}
          {mode === "hard" && (
            <p>
              Palabras mas dificiles, con 50% de que contengan la letra
            </p>
          )}
        </ModeCtn>

        <LinkButton to={"/"} text={"Home"} logo={<HomeIcon> </HomeIcon>} />
      </Wrapper>
    </>
  );
}
