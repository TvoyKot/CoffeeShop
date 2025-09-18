import { BrowserRouter, Routes, Route } from "react-router-dom";

import OurPage from "./pages/OurPage";
import MainPage from "./pages/MainPage";
import Pleasure from "./pages/Pleasure";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ourPage" element={<OurPage />} />
          <Route path="/Pleasure" element={<Pleasure />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
