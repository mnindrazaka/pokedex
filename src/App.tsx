import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetailPageLazy from "./pages/PokemonDetailPage/PokemonDetailPageLazy";
import PokemonListPageLazy from "./pages/PokemonListPage/PokemonListPageLazy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonListPageLazy />} />
        <Route path="/pokemon" element={<PokemonListPageLazy />} />
        <Route path="/pokemon/:slug" element={<PokemonDetailPageLazy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
