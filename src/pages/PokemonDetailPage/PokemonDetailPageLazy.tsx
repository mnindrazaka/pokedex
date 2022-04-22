import React from "react";

const PokemonDetailPage = React.lazy(() => import("./PokemonDetailPage"));

export default function PokemonDetailPageLazy() {
  return (
    <React.Suspense fallback="Loading...">
      <PokemonDetailPage />
    </React.Suspense>
  );
}
