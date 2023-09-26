import React from "react";
import styled from "styled-components";
import Table from "../components/Table";
import LinkButton from "../components/ui/LinkButton";
import { useContext, useRef, useEffect } from "react";
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

export default function Game() {
  const {
    wrongAnswers,
    rightAnswers,
    pending,
    wrongAnswersB,
    rightAnswersB,
    pendingB,
  } = useContext(StatusContext);

  const { settings } = useContext(SettingsContext);

  return (
    <>
      <Wrapper>
        <ButtonCtn>
          <LinkButton to={"/"} text={"Home"} onClick={() => window.reload()} />
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
          {...(settings.teamTable ? { Team: "Team A" } : { Team: "" })}
        />
        <Table tableA={true} />

        {settings.teamTable === true && (
          <>
            <TableInfo
              Team={"Team B"}
              rightAnswers={rightAnswersB}
              wrongAnswers={wrongAnswersB}
              pending={pendingB}
            />
            <Table tableA={false} />
          </>
        )}
      </Wrapper>
    </>
  );
}
