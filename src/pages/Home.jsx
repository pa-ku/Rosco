import React from "react";
import styled from "styled-components";
import MainButton from "../components/MainButton";
import { Link } from "react-router-dom";
import MainTitle from "../components/MainTitle";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SettingsIcon from '@mui/icons-material/Settings';
import diceLogo from "../assets/img/dice.png"
import WordCount from "../components/WordCount";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import logoFirst from "../assets/img/first.png"
import logoSecond from "../assets/img/second.png"
import keyframes from "styled-components";

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const ButtonCtn = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 1em;
opacity: 0;

animation: 2s start forwards 500ms;
@keyframes start {
  100%{
    opacity: 1;
  }
}
`

/* const Animation  = keyframes{
  
} */

const Author = styled.p`
  color: #696969;
  animation: 2s start forwards 500ms;
  padding-bottom: 3em;
`;

const Img = styled.img`
height: 150px;
position: absolute;
right: ${props => props.$right};
animation: 1s logoStart forwards;
opacity: 0;
`
const LogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 200px;
width: 100%;


@keyframes logoStart {
  100%{
    right: 50px;
    opacity: 1;
  }
}
`





export default function Home() {
  return (
    <>
    <Wrapper>
    
  

      <Author>Con 💜 por paku</Author>

      <LogoContainer>

<Img $right="150px" src={logoFirst} alt="" />
<Img $right="-20px" src={logoSecond} alt="" />

</LogoContainer>
      
<ButtonCtn>
    <WordCount text={"Palabras disponibles"} />
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
</Wrapper>
    </>
  );
}
