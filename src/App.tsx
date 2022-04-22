import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetailPage from "./pages/PokemonDetailPage";
import PokemonListPage from "./pages/PokemonListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
        <Route path="/pokemon" element={<PokemonListPage />} />
        <Route path="/pokemon/:slug" element={<PokemonDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
