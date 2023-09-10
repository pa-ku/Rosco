import React from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import { StatusContext } from "../context/StatusContext";
import useSound from "use-sound";
import rightSound from "../assets/sounds/right.wav";
import errorSound from "../assets/sounds/error.wav";
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
  height: 180px;
  & *{
    opacity: 0;
  animation: visible 1s forwards;
  }
  @media (max-width: 700px) {
    font-size: 1em;
  }
  @keyframes visible {
   100%{
    opacity: 1;
   } 
  }
`;

const Question = styled.td`
  border-bottom: 4px solid #1c2128;
  padding-inline: 10px;
  background-color: #212f42;
  color: floralwhite;
  padding-inline: 2em;
  font-size: 1.2em;
  padding-block: 1em;
  background-color: ${(props) => props.$backg};
  width: 80ch;
  position: relative;
  & *:first-letter {
    text-transform: uppercase;
  }
  & *{
    opacity: 0;
  animation: visible 1s forwards 200ms;
  }
  @media (max-width: 700px) {
    font-size: 1.1em;

  }
  
`;

const ButtonRow = styled.td`
  background-color: #212f42;

  border-bottom: 4px solid #1c2128;
  background-color: ${(props) => props.$backg};
  padding-right: 1em;
  @media(max-width:700px){
    padding-right: 0.3em;
  }
`;

const Answer = styled.p`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  font-size: 1.1em;
  color: floralwhite;
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
  border-left:1px solid;
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
`;
const ReportButton = styled.input`

border: none;
border-radius: 8px;
top: 0px;
cursor: pointer;
font-size: 1rem;
position: absolute;
color: #fa8989;
left: 0px;
padding: 0.5em;
background-color: rgba(255, 255, 255, 0);
`
export default function TableRow({ letter, question, answer }) {
  const [color, setColor] = useState();
  const [display, setDisplay] = useState("block");
  const [displayPending, setDisplayPending] = useState("block");

  const { setWrongAnswers, setRightAnswers, pending, setPending } =
    useContext(StatusContext);
  const { volume } = useContext(SettingsContext);
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
 /*    setColor("#324257"); */
    setColor("#4c3150");
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
<p>{letter}</p>
        </Letter>

        <Question $backg={color}>
            <Answer > {answer} </Answer> 
          <p>{question}</p> 

        </Question>
        <ButtonRow $backg={color}>
          <CtnButton>
            <Button
              $bordercolor={"#304e06"}
              $backgcolor={"#5c9902"}
              $display={display}
              onClick={rightBtn}
            >
              ✔
            </Button>
            <Button
              $bordercolor={"#650404"}
              $backgcolor={"#bd0000"}
              $display={display}
              onClick={wrongBtn}
            >
              ✖
            </Button>
            <Button
              $backgcolor={"#ad73c4"}
              $bordercolor={"#6f228d"}
              $display={displayPending}
              onClick={passBtn}
            >
            ➔
            </Button>
          </CtnButton>
        </ButtonRow>
      </Tr>
    </>
  );
}
