import "./App.css";
import Table from "./components/Table";
import styled from "styled-components";


const Title = styled.h1`
  font-size: 2.5em;

  font-weight: 500;
  text-shadow: 3px 1px #064ebb;
  padding-top: 1em;

  @media (max-width: 700px) {
    font-size: 2.5em;

  }
`;

const Author = styled.p`
color: #696969;
padding-top: 1em;
`

function App() {
  return (
    <>
    <Author>
    Con 💜 por pablito

    </Author>
      <Title>ROSQUEWE</Title>
      <Table />
    </>
  );
}

export default App;
