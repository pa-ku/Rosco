import React, { useContext } from 'react'
import styled from "styled-components";
import { TimeContext } from "../context/TimeContext";
import CheckBox from './ui/CheckBox';
import LinkButton from './ui/LinkButton';


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
`
const TimerButton = styled.button`
  background-color: #064ebb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid;
  border-right: 5px solid;
  border-left: 1px solid;
  border-top: 1px solid;
  text-shadow: 1px 1px #0b397e;
  border-color: #0b397e;


  cursor: pointer;
  padding: 4px 15px;
  font-weight: 400;
  border-radius: 20px;
  font-weight: 500;
  gap: 5px;
`

export default function TableInfo({rightAnswers,wrongAnswers,pending,Team}) {
  const { time,start,timeRunning,setTimeRunning } = useContext(TimeContext);
  function handleTime(){
    if(timeRunning === false){
      start();
      setTimeRunning(true)
  
    }
  }
  return (
    <>
    
    <CtnInfo>
      <TextTeam>{Team}</TextTeam>
    <TxtInfo $infocolor="#acf144">✔ {rightAnswers}</TxtInfo>
    <TxtInfo $infocolor="#ff5a5a">✖ {wrongAnswers}</TxtInfo>
    <TxtInfo $infocolor="#c56fd6">PASS {pending}</TxtInfo>
      <TextTeam> Time: {time.s !== 0 && time.s}{time.s === 0 && <p>Time Out!</p>}s </TextTeam>
<TimerButton onClick={handleTime}>START</TimerButton>

  </CtnInfo>

    </>
  )
}
