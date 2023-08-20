import "./App.css";
import Table from "./components/Table";
import styled from "styled-components";


const Title = styled.h1`
  font-size: 2.2em;
  text-transform: uppercase;
  font-weight: 100;
 @media(max-width:700px){
  padding-top:1em;
 }
`;

function App() {
  return (
    <>

      <Title>
ROSQUEWE
        </Title>
      <Table />
    </>
  );
}

export default App;

