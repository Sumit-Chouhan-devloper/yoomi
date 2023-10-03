import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero.tsx";
import { routes } from "./enums";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
