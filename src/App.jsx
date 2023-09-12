import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import WordList from "./pages/WordList";
import Settings from "./pages/Settings";
import background from "./assets/background.svg"
import styled from "styled-components";



const Background = styled.img`
position: absolute;
width: 100%;
stroke: #333;
color: #333;
left: 0px;
height: 100%;
z-index: -1;
object-fit: cover;
opacity: 0;
animation: 1s show forwards; 
overflow: hidden;
@keyframes show {
  0%{
    opacity: 0;

  }
  100%{
    opacity: 1;

  }
}
`

function App() {
  return (
    <>  
  <Background src={background} alt="" />
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/words" element={<WordList />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
    </>
  );
}

export default App;
