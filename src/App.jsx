import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import WordList from "./pages/WordList";


function App() {
  return (
    <>  
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/wordlist" element={<WordList />} />
    </Routes>
    </>
  );
}

export default App;
