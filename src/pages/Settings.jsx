import React from "react";
import LinkButton from "../components/ui/LinkButton";
import styled from "styled-components";

import { useContext } from "react";
import selectAudio from "../assets/sounds/select-sound.wav";
import checkAudio from "../assets/sounds/cheksound.wav";
import useSound from "use-sound";
import { SettingsContext } from "../context/SettingsContext";
import useLocalStorage from "use-local-storage";
import CheckBox from "../components/ui/CheckBox";
import { TimeContext } from "../context/TimeContext";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3em;
  height: 90vh;
`;
const OptionCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1em;
  opacity: 0;
  width: 100%;
  animation: 1s start forwards;
`;
const Label = styled.label`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.1rem;
  min-width: 50px;
`;
const OptionWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
`;
const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  margin: auto;
  flex-wrap: wrap;
  max-width: 400px;
`;
const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  background-color: #c4c4c4;
  border-bottom: 5px solid;
  border-right: 5px solid;
  border-left: 1px solid;
  border-top: 1px solid;

  font-weight: 600;
  border-color: #717171;
  color: #1c2128;
  padding: 7px;
  min-width: 100px;
  padding-inline: 15px;
  color: #222;
  text-align: center;
  font-size: 1.3rem;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
  &:checked {
    background-color: #d5adfd;
    border-color: #a579d2;
    border-color: ${(props) => props.$bordercolor};
    background-color: ${(props) => props.$backgroundcolor};
  }
  &:nth-child(1)::before {
    content: "Easy";
  }
  &:nth-child(2)::before {
    content: "Normal";
  }
  &:nth-child(3)::before {
    content: "Hard";
  }
  &:nth-child(4)::before {
    content: "Simpson";
  }
`;

const ModeCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #dfbeff;
  text-align: center;
  gap: 1em;
  padding-inline: 0.5em;
  margin-bottom: 2em;
`;
const ModeTxt = styled.p`
  color: ${(props) => props.$color};
  max-width: 40ch;
  height: 30px;
`;

const H1 = styled.h1`
  font-size: 3em;
  font-weight: 500;
  color: #94b7e7;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 2.5em;
  }
`;

export default function Settings() {
  const { setPrevTime ,setTime} = useContext(TimeContext);
  const { setSettings, settings } = useContext(SettingsContext);

  //SOUND MANAGER
  const [selectSound] = useSound(selectAudio, { volume: settings.volume });
  const [checkSound] = useSound(checkAudio, { volume: settings.volume });

  console.log(settings);

  function modeHandler(event) {
    switch (event.target.value) {
      case "easy":
        selectSound();
        setSettings({
          ...settings,
          mode: event.target.value,
          rollChance: 3,
          containsWords: 0,
          time: { ms: 0, s: 180, m: 0, h: 0 },
        });
        setPrevTime({ ms: 0, s: 180, m: 0, h: 0 });
        setTime({ ms: 0, s: 180, m: 0, h: 0 });
        break;

      case "normal":
        selectSound();
        setSettings({
          ...settings,
          mode: event.target.value,
          rollChance: 3,
          containsWords: 10,
          time: { ms: 0, s: 140, m: 0, h: 0 },
        });
        setPrevTime({ ms: 0, s: 140, m: 0, h: 0 });
        setTime({ ms: 0, s: 140, m: 0, h: 0 });
        break;

      case "hard":
        selectSound();
        setSettings({
          ...settings,
          mode: event.target.value,
          rollChance: 7,
          containsWords: 20,
          time: { ms: 0, s: 100, m: 0, h: 0 },
        });
        setPrevTime({ ms: 0, s: 100, m: 0, h: 0 });
        setTime({ ms: 0, s: 100, m: 0, h: 0 });
        break;
    }
  }

  function handleSound() {
    checkSound();
    if (settings.sound === false) {
      setSettings({ ...settings, volume: 1, sound: true });
    } else {
      setSettings({ ...settings, volume: 0, sound: false });
    }
  }

  function handleTeam() {
    checkSound();
    if (settings.teamTable === false) {
      setSettings({ ...settings, teamTable: true });
    } else {
      setSettings({ ...settings, teamTable: false });
    }
  }

  return (
    <>
      <Wrapper>
        <H1>SETTINGS</H1>

        <OptionWrapper>
          <OptionCtn>
            <CheckBox
              checked={settings.teamTable}
              onChange={handleTeam}
              id="Option1"
              type="checkbox"
            />

            <Label htmlFor="Option1">Team Table </Label>
          </OptionCtn>
          <OptionCtn>
            <CheckBox
              checked={settings.sound}
              onChange={handleSound}
              id="Option2"
              type="checkbox"
            />

            <Label htmlFor="Option2">SOUND</Label>
          </OptionCtn>
        </OptionWrapper>
        <ModeCtn>
          <BtnContainer>
            <Input
              value={"easy"}
              checked={settings.mode === "easy" && true}
              name="mode"
              type="radio"
              onChange={modeHandler}
            />
            <Input
              value={"normal"}
              name="mode"
              type="radio"
              checked={settings.mode === "normal" && true}
              onChange={modeHandler}
            />
            <Input
              value={"hard"}
              checked={settings.mode === "hard" && true}
              name="mode"
              type="radio"
              onChange={modeHandler}
            />
          </BtnContainer>
          {settings.mode === "easy" && (
            <ModeTxt>
              Para debiles e indesisos.<br></br>{" "}
              <b>TODAS las palabras comienzan con la letra</b> (200 segundos)
            </ModeTxt>
          )}
          {settings.mode === "normal" && (
            <ModeTxt>
              {" "}
              Para los que le gusta la vainilla <br></br> <b>30%</b> de que
              contengan la letra (140 segundos)
            </ModeTxt>
          )}
          {settings.mode === "hard" && (
            <ModeTxt>
              <b>70%</b> de que contengan la letra (120 segundos)
            </ModeTxt>
          )}
        </ModeCtn>

        <LinkButton to={"/"} text={"Home"} />
      </Wrapper>
    </>
  );
}
