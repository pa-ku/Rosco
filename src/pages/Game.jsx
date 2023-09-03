import React from "react";
import styled from "styled-components";
import Table from "../components/Table";
import LinkButton from "../components/LinkButton";
import HomeIcon from "@mui/icons-material/Home";
import ReloadLogo from "@mui/icons-material/Cached";


const ButtonCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  margin-block: 2em;
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
  return (
    <>
      <ButtonCtn>
        <LinkButton to={"/"} text={"Home"} logo={<HomeIcon> </HomeIcon>} />
        <LinkButton
          to={"/game"}
          logo={<ReloadIcon></ReloadIcon>}
          text="Roll"
          onClick={() => window.location.reload()}
        />
      </ButtonCtn>

      <Table />
    </>
  );
}
