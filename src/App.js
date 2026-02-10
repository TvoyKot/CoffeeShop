import { HashRouter, Routes, Route } from "react-router-dom";

import OurPage from "./pages/OurPage";
import MainPage from "./pages/MainPage";
import Pleasure from "./pages/Pleasure";
import Navigation from "./components/Navigation";
import AppFooter from "./components/AppFooter/app-footer";
import OurPageProduct from "./pages/OurPageProduct";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ourPage" element={<OurPage />} />
          <Route path="/ourPageProduct/:id" element={<OurPageProduct />} />
          <Route path="/Pleasure" element={<Pleasure />} />
        </Routes>
        <AppFooter />
      </HashRouter>
    </>
  );
}

export default App;
