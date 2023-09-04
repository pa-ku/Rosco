import React from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import { StatusContext } from "../context/StatusContext";
import useSound from "use-sound";
import rightSound from "../assets/sounds/right.wav"
import errorSound from "../assets/sounds/error.wav"
import { SettingsContext } from "../context/SettingsContext";

const Letter = styled.td`
  border: 4px solid #1c2128;
  padding-inline: 10px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  color: #befd95;
  background-color: #22272e;
  font-size: 1.2em;
  height: 150px;
  @media(max-width:700px){
    font-size: 1em;
  }
`;

const Question = styled.td`
  border-bottom: 4px solid #1c2128;
  text-align: center;
  padding-inline: 10px;
  background-color: #373e47;
  color: floralwhite;
  padding-block: 1.7em;
  font-size: 1.2em;
  background-color: ${(props) => props.$backg};
width: 80ch;
  @media (max-width: 700px) {
    font-size: 1.1em;
  }
  &:first-letter {
    text-transform: uppercase;
  }
`;

const Answer = styled.td`
  border-bottom: 4px  solid #1c2128;
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  font-size: 1.1em;
  color: floralwhite;
  background-color: #373e47;
  background-color: ${(props) => props.$backg};
  padding-block: 5px;
  z-index: 5;
  @media(max-width:700px){
    font-size: 1em;
    width: 5ch;

  }
`;

const CtnButton = styled.div`
  display: flex;
  margin-inline: 0.5em;
  animation: ButtonShow 1s;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 10px;
  & * {
    font-size: 1.2em;
    border: 4px solid #373e47;
    padding: 8px 14px;
    font-weight: 600;
  }

  @media (max-width: 700px) {
    margin-inline: 5px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    padding-block: 5px;
    scale: 0.9;
    & * {
      border: 0px;
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

const RowBtn = styled.button`
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
  cursor: pointer;
  color: ${props => props.$color};
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
`;

export default function TableRow({ letter, question, answer }) {
  const [color, setColor] = useState();
  const [display, setDisplay] = useState("block");
  const [displayPending, setDisplayPending] = useState("block");

  const { setWrongAnswers, setRightAnswers, pending, setPending } =
    useContext(StatusContext);
    const {volume } = useContext(SettingsContext);
  function rightBtn() {
    setColor("#2c462e");
    setRightAnswers((prevRightAnswers) => prevRightAnswers + 1);
    setDisplay("none");
    setDisplayPending("none");
    right();
    if (pending > 0) {
      setPending((prevPending) => prevPending - 1);
    }
  }

  function wrongBtn() {
    setColor("#4d2626");
    setWrongAnswers((prevWrongAnswers) => prevWrongAnswers + 1);
    setDisplayPending("none");
    setDisplay("none");
    error();
    if (pending > 0) {
      setPending((prevPending) => prevPending - 1);
    }
  }

  const passBtn = () => {
    setColor("#4a5058");
    setPending((prevPending) => prevPending + 1);
    setDisplayPending("none");
  };
  const beginsWithLetter = answer.toLowerCase().startsWith(letter);

  //Sounds
  const [right] = useSound(rightSound, { volume: volume });
  const [error] = useSound(errorSound, { volume: volume });

  return (
    <>
      <Tr>
        <Letter>
          <ContieneTxt> {beginsWithLetter ? " " : "CON"} </ContieneTxt>

          {letter}
        </Letter>

        <Question $backg={color}>{question}</Question>

        <Answer $backg={color}>
          {answer}
          <CtnButton>
            <RowBtn
              $bordercolor={"#3f6901"}
              $backgcolor={"#69ae01"}
              $display={display}
              onClick={rightBtn}
          
            >
              ✔
            </RowBtn>
            <RowBtn
              $bordercolor={"#8d0a0a"}
              $backgcolor={"#c30000"}
              $display={display}
              onClick={wrongBtn}
           
            >
              ✖
            </RowBtn>
            <RowBtn
              $backgcolor={"#6c6c6c"}
              $bordercolor={"#4a4a4a"}
              $display={displayPending}
              onClick={passBtn}
           
            >
              PASS
            </RowBtn>
          </CtnButton>
        </Answer>
      </Tr>
    </>
  );
}
