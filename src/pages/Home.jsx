import React from "react";
import styled from "styled-components";
import MainButton from "../components/MainButton";
import { Link } from "react-router-dom";
import MainTitle from "../components/MainTitle";


const ButtonCtn = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 1.5em;
margin-block: 2em;
`

const Author = styled.p`
  color: #696969;
  padding-top: 1em;
`;
export default function Home() {
  return (
    <>
      <Author>Con 💜 por pablito</Author>

      <MainTitle text="ROSQUEWE" />
<ButtonCtn>

      <Link to={"/game"}>
      <MainButton to="/home" text="START"  />
      </Link>
      <MainButton text="WORD LIST" onClick={() => alert("AUN ESTAMOS TRABAJANDO EN ELLO")}/>
</ButtonCtn>
    </>
  );
}
