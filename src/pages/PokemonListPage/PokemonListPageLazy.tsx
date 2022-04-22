import React from "react";

const PokemonListPage = React.lazy(() => import("./PokemonListPage"));

export default function PokemonListPageLazy() {
  return (
    <React.Suspense fallback="Loading...">
      <PokemonListPage />
    </React.Suspense>
  );
}
