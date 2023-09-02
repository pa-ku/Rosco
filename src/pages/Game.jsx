import React from "react";
import styled from "styled-components";
import Table from "../components/Table";
import MainButton from "../components/MainButton";
import MainTitle from "../components/MainTitle";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import diceLogo from "../assets/img/dice.png"
import LinkButton from "../components/LinkButton";

const Img = styled.img`
height: 150px;
padding-top: 1em ;
`

const ButtonCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  margin-block: 2em;
`;



export default function Game() {
  return (
    <>

      <ButtonCtn>
        <LinkButton />
        <Link to={"/game"}>
          <MainButton
            altLogo={true}
            text="Roll"
            onClick={()=>window.location.reload()
            }
          />
        </Link>
      </ButtonCtn>

      <Table />
    </>
  );
}
