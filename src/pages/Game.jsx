import React from "react";
import styled from "styled-components";
import Table from "../components/Table";
import LinkButton from "../components/ui/LinkButton";
import HomeIcon from "@mui/icons-material/Home";
import ReloadLogo from "@mui/icons-material/Cached";
import Title from "../components/Title";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

const Wrapper = styled.div`
padding-top:4em;
`

const ButtonCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2em;
  margin-block: 4em;
  @media(max-width:700px){
    flex-direction: column;
    gap: 1em;
  }
`;
const ReloadIcon = styled(ReloadLogo)`
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



export default function Game() {



  const {
    teamTable
  } = useContext(SettingsContext);

  return (
    <>
    <Wrapper>
    <Title text={"ROSQUEWE"} />
      <ButtonCtn>
        <LinkButton to={"/"} text={"Home"} logo={<HomeIcon> </HomeIcon>} />
        <LinkButton
          to={"/game"}
          logo={<ReloadIcon></ReloadIcon>}
          text="Roll"
          onClick={() => window.location.reload()}
        />
      </ButtonCtn>

      {teamTable === true && (<Title text={"Team A"} /> )}

      <Table />


{teamTable === true && (<>
  <Title text={"Team B"} />
  <Table /> 
</> 
)}


      </Wrapper>
    </>
  );
}
