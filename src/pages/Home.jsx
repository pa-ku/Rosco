import React from "react";
import styled from "styled-components";
import MainButton from "../components/MainButton";
import { Link } from "react-router-dom";
import MainTitle from "../components/MainTitle";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SettingsIcon from '@mui/icons-material/Settings';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

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
      <MainButton logo={<PlayArrowIcon></PlayArrowIcon>} to="/home" text="START"  />
      </Link>
      <MainButton text="CONFIG" logo={<SettingsIcon></SettingsIcon>} onClick={() => alert("AUN ESTAMOS TRABAJANDO EN ELLO")} />
      <MainButton logo={<FormatListBulletedIcon></FormatListBulletedIcon>} text="WORD LIST" onClick={() => alert("AUN ESTAMOS TRABAJANDO EN ELLO")}/>
</ButtonCtn>
    </>
  );
}
