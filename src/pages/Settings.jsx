import React from "react";
import HomeButton from "../components/LinkButton";
import styled from "styled-components";
import MainTitle from "../components/MainTitle";

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
  justify-content: center;
  gap: 1em;
  font-weight: 600;
`;

const Label = styled.label`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.1rem;
`;
const Checkbox = styled.input`
  -webkit-appearance: none;
  cursor: pointer;
  background-color: #a0c5fd;
  width: 35px;
  height: 20px;
  border-radius: 10px;
position: relative;
transition: 1s;
  &:checked{
  background-color: #4387ed;
  }
  &::before{
    content: " ";
    position: absolute;
    width: 10px;
    height: 10px;
    top: 5px;
    right: 20px;
    border-radius: 100%;
    background-color: #4387ed;
    animation: 500ms unCheked ;
  }
  &:checked::before{
    background-color: #a0c5fd;
    animation: 500ms cheked forwards;
   
  }
  @keyframes cheked {
   100%{
    right: 5px;
   } 
  }
  @keyframes unCheked {
   0%{
    right: 5px;
   } 
   100%{
    right: 20px;
   } 
  }
`;

export default function Settings() {
  return (
    <>
      <Wrapper>
        <MainTitle text={"SETTINGS"} />
        <OptionCtn>
          <Checkbox checked="cheked" id="Option1" type="checkbox" />
          <Label htmlFor="Option1">Palabras que contengan</Label>
        </OptionCtn>
        <OptionCtn>
          <Checkbox id="Option2" type="checkbox" />
          <Label htmlFor="Option2">Sonidos</Label>
        </OptionCtn>
        <HomeButton />
      </Wrapper>
    </>
  );
}
