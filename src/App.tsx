import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Portfolio } from "./pages/Portfolio";
import { FidezeLanding } from "./pages/FidezeLanding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PORTFOLIO */}
        <Route path="/" element={<Portfolio />} />

        {/* LANDING FIDEZE */}
        <Route path="/fideze" element={<FidezeLanding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
