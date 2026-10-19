import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulaire from "./components/Formulaire";
import Experts1 from "./components/Experts1";
import Experts2 from "./components/Experts2";

function App() {
  return (
    <Routes>
      <Route path="/formulaire" element={<Formulaire />} />
      <Route path="/Experts1" element={<Experts1 />} />
      <Route path="/Experts2" element={<Experts2 />} />
    </Routes>
  );
}

export default App;
