import React from "react";
import styled from "styled-components";
import Table from "../components/Table";
import LinkButton from "../components/ui/LinkButton";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import TableInfo from "../components/TableInfo";
import VolumeOn from "@mui/icons-material/VolumeUp";
import VolumeOff from "@mui/icons-material/VolumeOff";
import PersonIcon from "@mui/icons-material/Person";

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
  background-color: rgba(255, 255, 255, 0);
  border: none;
  border: none;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    scale: 1.1;
  }
`;

export function SoundBtn() {
  const { settings,setSettings } = useContext(GameContext);

  function handleSound() {
    if (settings.sound === false) {
      setSettings({ ...settings, volume: 1, sound: true });
    } else {
      setSettings({ ...settings, volume: 0, sound: false });
    }
  }

  return (
    <>
      <SoundButton onClick={handleSound}>
        {" "}
        {settings.sound ? <VolumeOn></VolumeOn> : <VolumeOff></VolumeOff>}{" "}
      </SoundButton>
    </>
  );
}

export default function Game() {
  const { settings, answerHandler } = useContext(GameContext);

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
          rightAnswers={answerHandler.rightAnswersA}
          wrongAnswers={answerHandler.wrongAnswersA}
          Team={"A"}
          pending={answerHandler.pendingA}
          soundButton={<SoundBtn />}
        />
        <Table tableA={true} />

        {settings.teamTable === true && (
          <>
            <TableInfo
              Team={"B"}
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
