import "./App.css";
import Table from "./components/Table";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.2em;
  text-transform: uppercase;
  font-weight: 100;
  text-shadow: 3px 3px #064ebb;
  padding-top: 2em;
  @media (max-width: 700px) {
    font-size: 2.5em;
    padding-top: 1em;
  }
`;

function App() {
  return (
    <>
      <Title>ROSQUEWE</Title>
      <Table />
    </>
  );
}

export default App;
