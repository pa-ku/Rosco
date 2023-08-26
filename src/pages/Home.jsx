import React from "react";
import styled from "styled-components";
import MainButton from "../components/MainButton";
import { Link } from "react-router-dom";
import MainTitle from "../components/MainTitle";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SettingsIcon from '@mui/icons-material/Settings';

import WordCount from "../components/WordCount";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

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
    <WordCount text={"Palabras disponibles"} />
<ButtonCtn>

      <Link to={"/game"}>
      <MainButton logo={<SportsEsportsIcon></SportsEsportsIcon>} to="/home" text="Start"  />
      </Link>

      <Link to={"/wordlist"}>
      <MainButton logo={<FormatListBulletedIcon></FormatListBulletedIcon>} text="Words"/>
      </Link>
    
      <Link to={"/settings"}>
      <MainButton text="Settings" logo={<SettingsIcon></SettingsIcon>} />
      </Link>


</ButtonCtn>
    </>
  );
}
