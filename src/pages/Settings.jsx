import React from "react";
import LinkButton from "../components/LinkButton";
import styled from "styled-components";
import Title from "../components/Title";
import HomeIcon from "@mui/icons-material/Home";
import { useState, useContext } from "react";
import selectAudio from "../assets/sounds/select-sound.wav";
import dohAudio from "../assets/sounds/doh.mp3";
import checkAudio from "../assets/sounds/cheksound.wav";
import useSound from "use-sound";
import { SettingsContext } from "../context/SettingsContext";
import useLocalStorage from "use-local-storage";

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
  justify-content: center;
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
const Checkbox = styled.input`
  -webkit-appearance: none;
  cursor: pointer;
  background-color: #efdeff;
  width: 35px;
  height: 20px;
  border-radius: 9px;
  position: relative;
  transition: 1s;
  outline: 2px solid #814fb3;
  &:hover {
    filter: brightness(1.1);
  }
  &:checked {
    background-color: #c791fd;
  }
  &::before {
    content: " ";
    position: absolute;
    width: 14px;
    height: 14px;
    top: 3px;
    right: 19px;
    border-radius: 100%;
    background-color: #c791fd;
    animation: 700ms unCheked;
  }
  &:checked::before {
    animation: 600ms cheked forwards;
  }
  @keyframes cheked {
    50% {
      width: 17px;
    }

    100% {
      right: 3px;
      width: 14px;
      background-color: #ffffff;
    }
  }
  @keyframes unCheked {
    0% {
      right: 5px;
    }
    50% {
      width: 17px;
    }
    100% {
      right: 19px;
      background-color: #c791fd;
    }
  }
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
  padding: 8px;
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
text-align:center;
  gap: 1em;
  padding-inline: 0.5em;
`;
const ModeTxt = styled.p`
  color: ${(props) => props.$color};
  max-width: 40ch;
  height: 30px;
`;

export default function Settings() {
  const [mode, setMode] = useLocalStorage("mode", "");

  const [buttonState, setButtonState] = useLocalStorage("ButtonState", {
    easy: false,
    normal: false,
    hard: false,
    simpsons: false,
  });

  const {
    setContainsCounter,
    setRollChance,
    setSound,
    setVolume,
    sound,
    volume,
  } = useContext(SettingsContext);

  //SOUND MANAGER
  const [selectSound] = useSound(selectAudio, { volume: volume });
  const [dohSound] = useSound(dohAudio, { volume: volume });
  const [checkSound] = useSound(checkAudio, { volume: volume });

  function modeHandler(event) {
    setMode(event.target.value);
    switch (event.target.value) {
      case "easy":
        setContainsCounter(0);
        selectSound();
        setButtonState((prevState) => ({
          ...prevState,
          easy: true,
          normal: false,
          hard: false,
          simpsons: false,
        }));
        break;
      case "normal":
        setRollChance(3);
        setContainsCounter(10);
        selectSound();
        setButtonState((prevState) => ({
          ...prevState,
          easy: false,
          normal: true,
          hard: false,
          simpsons: false,
        }));
        break;
      case "hard":
        setRollChance(7);
        setContainsCounter(20);
        selectSound();
        setButtonState((prevState) => ({
          ...prevState,
          easy: false,
          normal: false,
          hard: true,
          simpsons: false,
        }));
        break;
      case "simpsons":
        setRollChance(3);
        setContainsCounter(10);
        dohSound();
        setButtonState((prevState) => ({
          ...prevState,
          easy: false,
          normal: false,
          hard: false,
          simpsons: true,
        }));
        break;
    }
  }

  function handleSound(event) {
    setSound(event.target.checked);
    if (sound === false) {
      setVolume(0.2);
    } else {
      setVolume(0);
    }
  }

  return (
    <>
      <Wrapper>
        <Title text={"SETTINGS"} />

        <OptionWrapper>
          <OptionCtn>
            <Checkbox
              checked={sound}
              onChange={handleSound}
              onClick={checkSound}
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
              checked={buttonState.easy}
              name="mode"
              type="radio"
              onChange={modeHandler}
            />
            <Input
              value={"normal"}
              name="mode"
              type="radio"
              checked={buttonState.normal}
              onChange={modeHandler}
            />
            <Input
              value={"hard"}
              checked={buttonState.hard}
              name="mode"
              type="radio"
              onChange={modeHandler}
            />

         {/*    <Input
              name="mode"
              checked={buttonState.simpsons}
              type="radio"
              value={"simpsons"}
              onChange={modeHandler}
              $backgroundcolor={"#ffd404"}
              $bordercolor={"#c9a802"}
            /> */}
          </BtnContainer>
          {mode === "easy" && (
            <ModeTxt>
              Para debiles e indesisos.<br></br>{" "}
              <b>TODAS las palabras comienzan con la letra</b>
            </ModeTxt>
          )}
          {mode === "normal" && (
            <ModeTxt>
              {" "}
              Para los que le gusta la vainilla <br></br> <b>30%</b> de que
              contengan la letra
            </ModeTxt>
          )}
          {mode === "hard" && (
            <ModeTxt>
              Palabras mas dificiles <br></br>
              <b>70%</b> de que contengan la letra
            </ModeTxt>
          )}
          {mode === "simpsons" && (
            <ModeTxt $color="#ffd404">
              Una lista especial con <b>preguntas de los Simpsons</b> Duh!
            </ModeTxt>
          )}
        </ModeCtn>

        <LinkButton to={"/"} text={"Home"} logo={<HomeIcon> </HomeIcon>} />
      </Wrapper>
    </>
  );
}
