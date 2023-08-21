import React from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import { StatusContext } from "../context/StatusContext";

const Letter = styled.td`
  border: 2px solid #1c2128;
  padding: 8px;
  padding-inline: 1em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  color: #befd95;
  background-color: #22272e;
  font-size: 1.2em;
  @media (max-width: 700px) {
    padding-inline: 20px;
  }
`;

const Question = styled.td`
  border: 2px solid #1c2128;
  text-align: center;
  padding-inline: 10px;
  background-color: #373e47;
  color: floralwhite;
  padding-block: 1.7em;
  font-size: 1.2em;
  background-color: ${(props) => props.backg};

  @media (max-width: 700px) {
    font-size: 1.1em;
  }
  &:first-letter {
    text-transform: uppercase;
  }
`;

const Answer = styled.td`
  border: 2px solid #1c2128;
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  font-size: 1em;
  color: floralwhite;
  background-color: #373e47;
  background-color: ${(props) => props.backg};
  padding-block: 5px;
  z-index: 5;

  @media (max-width: 700px) {
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
  justify-content: center;

  & * {
    border: 4px solid #373e47;
  }

  @media (max-width: 700px) {
    margin-inline: 5px;
    padding: 0px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    padding-block: 5px;
    & * {
      border: 0px;
      padding: 10px 15px;
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

const RightBtn = styled.button`
  display: ${(props) => props.display};
  background-color: #61a002;
  border-bottom: 2px solid #3f6901;
  border-right: 2px solid #3f6901;
  border-top: 1px solid #3f6901;
  border-left: 1px solid #3f6901;
  text-shadow: 1px 1.5px #3f6901;

  &:hover {
    background-color: #7abd15;
  }

  @media (max-width: 700px) {
  }
`;

const PassBtn = styled.button`
  display: ${(props) => props.display};
  background-color: #888;
  border-bottom: 2px solid #444;
  border-right: 2px solid #444;
  border-top: 1px solid #444;
  border-left: 1px solid #444;
  text-shadow: 1px 1.5px #444;


  &:hover {
    background-color: #9e9e9e;
    border-color:#444 ;
  }
`;

const WrongBtn = styled.button`
  display: ${(props) => props.display};
  background-color: #c71717;
  border-bottom: 2px solid #8d0a0a;
  border-right: 2px solid #8d0a0a;
  border-top: 1px solid #8d0a0a;
  border-left: 1px solid #8d0a0a;
  text-shadow: 1px 1.5px #8d0a0a;

  &:hover {
    background-color: #df2e2e;
    border-color:#444 ;
  }
`;

const Tr = styled.tr`
  width: 100%;
`;

export default function Row({ letter, ask, answer }) {
  const [color, setColor] = useState();
  const [disable, setDisable] = useState();
  const [disablePending, setDisablePending] = useState();

  const {
    wrongAnswers,
    setWrongAnswers,
    rightAnswers,
    setRightAnswers,
    pending,
    setPending,
  } = useContext(StatusContext); //acceder al contexto, y al value

  const right = () => {
    setColor("#2c462e");
    setRightAnswers(rightAnswers + 1);
    setDisable((prevState) => "none");
    setDisablePending("none");

    if (pending > 0) {
      setPending((prevPending) => pending - 1);
    }
  };

  const pass = () => {
    setColor("#4a5058");
    setPending((prevPending) => pending + 1);
    setDisablePending("none");
  };

  const wrong = () => {
    setColor("#4d2626");
    setDisable((prevState) => "none");
    setDisablePending("none");
    setWrongAnswers((prevWrongAnswers) => wrongAnswers + 1);

    if (pending > 0) {
      setPending((prevPending) => pending - 1);
    }
  };

  return (
    <>
      <Tr>
        <Letter>{letter}</Letter>
        <Question backg={color}>{ask}</Question>
        <Answer backg={color}>
          {answer}
          <CtnButton>

            <RightBtn display={disable} disabled={disable} onClick={right}>
              ✔
            </RightBtn>

            <WrongBtn display={disable} disabled={disable} onClick={wrong}>
              ✖
            </WrongBtn>

            <PassBtn display={disablePending} disabled={disablePending} onClick={pass}>
              PASS
            </PassBtn>
          </CtnButton>
        </Answer>
      </Tr>
    </>
  );
}
