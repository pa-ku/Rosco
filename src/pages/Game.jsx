import React from "react";
import styled from "styled-components";
import Table from "../components/Table";
import LinkButton from "../components/ui/LinkButton";
import ReloadLogo from "@mui/icons-material/Cached";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { StatusContext } from "../context/StatusContext";
import TableInfo from "../components/TableInfo";
const Wrapper = styled.div`
  padding-top: 4em;
`;

const ButtonCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2em;
  margin-block: 4em;
  @media (max-width: 700px) {
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
  const { wrongAnswers, rightAnswers, pending,wrongAnswersB, rightAnswersB, pendingB } = useContext(StatusContext);

  const { teamTable } = useContext(SettingsContext);

  return (
    <>
      <Wrapper>
        <ButtonCtn>
          <LinkButton to={"/"} text={"Home"}  />
          <LinkButton
            to={"/game"}
            text="Roll"
            onClick={() => window.location.reload()}
          />
        </ButtonCtn>


        <TableInfo
          rightAnswers={rightAnswers}
          wrongAnswers={wrongAnswers}
          pending={pending}
        {...teamTable ? {Team:"Team A"} : {Team:""}}
        />
        <Table tableA={true}/>

        {teamTable === true && (
          <>
            <TableInfo
            Team={"Team B"}
              rightAnswers={rightAnswersB}
              wrongAnswers={wrongAnswersB}
              pending={pendingB}
            />
            <Table tableA={false}/>
          </>
        )}
      </Wrapper>
    </>
  );
}


