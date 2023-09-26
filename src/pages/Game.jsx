import React from "react";
import styled from "styled-components";
import Table from "../components/Table";
import LinkButton from "../components/ui/LinkButton";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import TableInfo from "../components/TableInfo";
import VolumeOn from "@mui/icons-material/VolumeUp";
import VolumeOff from "@mui/icons-material/VolumeOff";

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

const SoundButton = styled.button`
background-color:rgba(255, 255, 255, 0);
border: none;
border: none;
cursor: pointer;
transition: 200ms;
&:hover{
scale: 1.1;
}
`;

export default function Game() {
  const { setSettings, settings, answerHandler } = useContext(GameContext);

  function handleSound() {
    if (settings.sound === false) {
      setSettings({ ...settings, volume: 1, sound: true });
    } else {
      setSettings({ ...settings, volume: 0, sound: false });
    }
  }

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
        <SoundButton onClick={handleSound}>
          {" "}
          {settings.sound ? (
            <VolumeOn></VolumeOn>
          ) : (
            <VolumeOff></VolumeOff>
          )}{" "}
        </SoundButton>
        </ButtonCtn>

        <TableInfo
          rightAnswers={answerHandler.rightAnswersA}
          wrongAnswers={answerHandler.wrongAnswersA}
          pending={answerHandler.pendingA}
          {...(settings.teamTable ? { Team: "Team A" } : { Team: "" })}
        />
        <Table tableA={true} />

        {settings.teamTable === true && (
          <>
            <TableInfo
              Team={"Team B"}
              rightAnswers={answerHandler.rightAnswersB}
              wrongAnswers={answerHandler.wrongAnswersB}
              pending={answerHandler.pendingB}
            />
            <Table tableA={false} />
          </>
        )}
      </Wrapper>
    </>
  );
}
