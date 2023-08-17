import './App.css'
import Table from './components/Table'
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.2em;
  text-transform: uppercase;
`;
function App() {
  return (
    <>
   <Title>Rosco</Title>
    <Table />

    </>
  )
}

export default App
