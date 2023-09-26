import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TimeContext } from "../context/TimeContext";


const CtnInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  position: sticky;
  top: 0px;
  background-color: #111;
  width: 100%;
  text-align: center;
  outline: 2px solid #111;
  color: #a0c5fd;
  z-index: 100;
  padding: 0.8em 2em;
  border-bottom: 2px solid #1c2128;
  @media (max-width: 700px) {
    font-size: 1em;
    border: 0px;
    border-radius: 0px;
    padding: 0.1em 2em;
  }
`;

const TxtInfo = styled.p`
  font-weight: 600;
  font-size: 1.1em;
  padding: 10px;
  color: ${(props) => props.$infocolor};
`;

const TextTeam = styled.p`
  color: #fff;
  font-weight: 800;
  font-size: 14px;
`;

const Timer = styled.button`
  background-color: ${(props) => (props.$TimeActive ? "#3a485e" : "#064ebb")};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid;
  border-right: 5px solid;
  border-left: 1px solid;
  border-top: 1px solid;
  text-shadow: 1px 1px #0b397e;
  border-color: ${(props) => (props.$TimeActive ? "#212c3d" : "#0b397e")};
  cursor: pointer;
  padding: 8px 10px;
  font-weight: 400;
  border-radius: 20px;
  font-weight: 800;
  gap: 5px;
`;

export default function TableInfo({
  rightAnswers,
  wrongAnswers,
  pending,
  Team,
}) {
  const { time, start, timeRunning, setTimeRunning } = useContext(TimeContext);
  const [timeActive, setTimeActive] = useState(false);

  function handleTime() {
    if (timeRunning === false) {
      setTimeRunning(true);
      start();
      setTimeActive();
    }
  }
  return (
    <>
      <CtnInfo>
        <TextTeam>{Team}</TextTeam>
        <TxtInfo $infocolor="#acf144">✔ {rightAnswers}</TxtInfo>
        <TxtInfo $infocolor="#ff5a5a">✖ {wrongAnswers}</TxtInfo>
        <TxtInfo $infocolor="#d67fe7">PASS {pending}</TxtInfo>

        <Timer $TimeActive={timeRunning} onClick={handleTime}>
          {time.s !== 0 && time.s}
          {time.s === 0 && <p>Time Out!</p>}s
        </Timer>
      </CtnInfo>
    </>
  );
}
