import React from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import useSound from "use-sound";
import rightSound from "../assets/sounds/right.wav";
import errorSound from "../assets/sounds/error.wav";
import passSound from "../assets/sounds/select-sound.wav";
import { GameContext } from "../context/GameContext";
import { TimeContext } from "../context/TimeContext";
import { ReportButton } from "./ui/ReportButton";

const Letter = styled.td`
  border: 4px solid #1c2128;
  padding-inline: 10px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  color: #befd95;
  background-color: #22272e;
  font-size: 1.2em;
  height: 180px;
  & * {
    opacity: 0;
    animation: visible 1s forwards;
  }
  @media (max-width: 700px) {
    font-size: 1em;
  }
  @keyframes visible {
    100% {
      opacity: 1;
    }
  }
`;
const Question = styled.td`
  border-bottom: 4px solid #1c2128;
  letter-spacing: 0.7px;
  background-color: #212f42;
  color: #f1f1f1;
  padding-inline: 2em;
  font-size: 15px;
  padding-block: 1em;
  background-color: ${(props) => props.$backg};
  width: 80ch;
  position: relative;
  & *:first-letter {
    text-transform: uppercase;
  }
  & * {
    opacity: 0;
    animation: visible 1s forwards 200ms;
  }
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;
const ButtonRow = styled.td`
  background-color: #212f42;
  border-bottom: 4px solid #1c2128;
  background-color: ${(props) => props.$backg};
  padding-right: 1em;
  @media (max-width: 700px) {
    padding-right: 0.3em;
  }
`;
const Answer = styled.p`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.1em;
  color: #79affc;
  z-index: 5;
  @media (max-width: 700px) {
    font-size: 1em;
  }
`;
const CtnButton = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  animation: ButtonShow 1s forwards 300ms;

  @media (max-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    & * {
    }
  }
  @keyframes ButtonShow {
    0% {
      opacity: 0;
      translate: -25px;
    }
    100% {
      opacity: 1;
      translate: 0px;
    }
  }
`;
const Button = styled.button`
  display: ${(props) => props.$display};
  background-color: ${(props) => props.$backgcolor};
  border-bottom: 3px solid;
  border-right: 3px solid;
  border-top: 1px solid;
  border-left: 1px solid;
  text-shadow: 1px 1px ${(props) => props.$bordercolor};
  border-color: ${(props) => props.$bordercolor};
  transition: 0.3s;
  border-radius: 8px;
  width: 45px;
  height: 40px;
  font-size: 1.5em;
  cursor: pointer;
  font-weight: 800;
  &:hover {
    filter: brightness(1.1);
    border-color: ${(props) => props.$bordercolor};
  }
`;
const Tr = styled.tr`
  width: 100%;
`;
const ContieneTxt = styled.p`
  font-size: 0.5em;
  color: #b8b8b8;
  font-weight: 700;
  letter-spacing: 1px;
`;
const Line = styled.div`
  width: 40px;
  height: 1px;

  border-top: 4px dotted #c4c4c455;

  margin: auto;
  margin-block: 5px;
`;
export default function TableRow({ letter, question, answer, tableA }) {
  const [color, setColor] = useState();
  const [display, setDisplay] = useState("block");
  const [displayPending, setDisplayPending] = useState("block");
  const { stop, timeRunning, setTimeRunning } = useContext(TimeContext);
  const { settings,answerHandler, setAnswerHandler  } = useContext(GameContext);

  //Sounds
  const [rightAudio] = useSound(rightSound, { volume: settings.volume });
  const [wrongAudio] = useSound(errorSound, { volume: settings.volume });
  const [passAudio] = useSound(passSound, { volume: settings.volume });

  function handleButton(event) {
    setDisplayPending("none");
    switch (event.target.value) {
      //RIGHT
      case "right":
        setDisplay("none");
        rightAudio();
        setColor("#2c462e");
        if (tableA === true) {
          setAnswerHandler({
            ...answerHandler,
            rightAnswersA: answerHandler.rightAnswersA + 1,
          });

          if (answerHandler.pendingA > 0) {
            setAnswerHandler({
              ...answerHandler,
              pendingA: answerHandler.pendingA - 1,
            });
          }
        } else {
          setAnswerHandler({
            ...answerHandler,
            rightAnswersB: answerHandler.rightAnswersB + 1,
          });
          if (answerHandler.pendingB > 0) {
            setAnswerHandler({
              ...answerHandler,
              pendingB: answerHandler.pendingB - 1,
            });
          }
        }
        break;
      //WRONG
      case "wrong":
        setColor("#4d2626");
        setDisplay("none");
        wrongAudio();
        if (timeRunning === true) {
          stop();
          setTimeRunning(false);
        }
        if (tableA === true) {
          setAnswerHandler({
            ...answerHandler,
            wrongAnswersA: answerHandler.wrongAnswersA + 1,
          });
          if (answerHandler.pendingA > 0) {
            setAnswerHandler({
              ...answerHandler,
              pendingA: answerHandler.pendingA - 1,
            });
          }
        } else {
          setAnswerHandler({
            ...answerHandler,
            wrongAnswersB: answerHandler.wrongAnswersB + 1,
          });
          if (answerHandler.pendingB > 0) {
            setAnswerHandler({
              ...answerHandler,
              pendingB: answerHandler.pendingB - 1,
            });
          }
        }

        break;
      //PASS
      case "pass":
        passAudio()
        setColor("#4c3150");
        if (timeRunning === true) {
          stop();
          setTimeRunning(false);
        }
        if (tableA === true) {
          setAnswerHandler({
            ...answerHandler,
            pendingA: answerHandler.pendingA + 1,
          });
        } else {
          setAnswerHandler({
            ...answerHandler,
            pendingB: answerHandler.pendingB + 1,
          });
        }
        break;
    }
  }

  const beginsWithLetter = answer.toLowerCase().startsWith(letter);

  return (
    <>
      <Tr>
        <Letter>
          <ContieneTxt> {beginsWithLetter ? " " : "CON"} </ContieneTxt>
          <p>{letter}</p>
        </Letter>

        <Question $backg={color}>
          <p>{question}</p>
          <Line></Line>
          <Answer> {answer} </Answer>
          <ReportButton wordValue={answer} clueValue={question} />
        </Question>
        <ButtonRow $backg={color}>
          <CtnButton>
            <Button
              $bordercolor={"#304e06"}
              $backgcolor={"#5c9902"}
              $display={display}
              value={"right"}
              onClick={handleButton}
            >
              ✔
            </Button>
            <Button
              $bordercolor={"#650404"}
              $backgcolor={"#bd0000"}
              $display={display}
              value={"wrong"}
              onClick={handleButton}
            >
              ✖
            </Button>
            <Button
              $backgcolor={"#ad73c4"}
              $bordercolor={"#6f228d"}
              $display={displayPending}
              value={"pass"}
              onClick={handleButton}
            >
              ➔
            </Button>
          </CtnButton>
        </ButtonRow>
      </Tr>
    </>
  );
}
