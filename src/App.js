import { Routes, Route } from "react-router-dom";

import Menu from "./link/Menu";
import Main from "./link/Main";
import ArtStudy from "./link/ArtStudy";
import KorStudy from "./link/KorStudy";
import EngStudy from "./link/EngStudy";
import MathStudy from "./link/MathStudy";

function App() {
  return (
    <div className="wrap">
      <Menu />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/artstudy" element={<ArtStudy />}></Route>
        <Route path="/korstudy" element={<KorStudy />}></Route>
        <Route path="/engstudy" element={<EngStudy />}></Route>
        <Route path="/mathstudy" element={<MathStudy />}></Route>
      </Routes>
    </div>
  );
}

export default App;
