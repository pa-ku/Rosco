import React from "react";
import styled from "styled-components";
import ListIcon from "@mui/icons-material/FormatListBulleted";
import SettingsIcon from "@mui/icons-material/Settings";
import StartIcon from "@mui/icons-material/SportsEsports";
import logoFirst from "../assets/img/first.png";
import logoSecond from "../assets/img/second.png";
import LinkButton from "../components/LinkButton";

import useSound from "use-sound";
import checkAudio from "../assets/sounds/right.wav";


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media (max-width: 700px) {
    height: 80vh;
  }
`;
const ButtonCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  opacity: 0;
  animation: 1s start forwards;
`;
const Author = styled.p`
  color: #696969;
  animation: 2s start forwards 500ms;
  margin-top: auto;
  padding-top: 2em;
  opacity: 0;
  animation: 1s start forwards;
`;
const Img = styled.img`
  height: 150px;
  position: absolute;
  right: ${(props) => props.$right};
  animation: 500ms logoStart forwards ease-in;
  opacity: 0;
  scale: 0.7;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 200px;
  width: 100%;
  animation: 1.5s Bounce forwards;

  @keyframes logoStart {
    100% {
      right: 12px;
      opacity: 1;
      scale: 0.9;
    }
  }
  @keyframes Bounce {
    70% {
      rotate: 190deg;
    }
    100% {
      rotate: 180deg;
    }
  }
`;

export default function Home() {
  const [logoSound] = useSound(checkAudio, { volume: 0.1 });
  
  function logoAudi(){
    setTimeout(() => {
      logoSound()
    }, 550);
    
  }

  
  logoAudi()
  
  return (
    <>
      <Wrapper>
        <LogoContainer>
          <Img $right="70px" src={logoFirst} alt="" />
          <Img $right="-30px" src={logoSecond} alt="" />
        </LogoContainer>

        <ButtonCtn>
          <LinkButton
            to="/game"
            text="Start"
            logo={<StartIcon></StartIcon>}
          />
          <LinkButton
            to={"/wordlist"}
            text="Words"
            logo={<ListIcon></ListIcon>}
          />
          <LinkButton
            to={"/settings"}
            text="Settings"
            logo={<SettingsIcon></SettingsIcon>}
          />
        </ButtonCtn>
        <Author>With 💜 by paku</Author>
      </Wrapper>
    </>
  );
}
