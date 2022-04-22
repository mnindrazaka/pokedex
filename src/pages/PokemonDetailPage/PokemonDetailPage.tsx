import React from "react";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary";
import { getPokemonSuspense } from "../../model/Pokemon";
import PokemonDetail from "./PokemonDetail";

export default function PokemonDetailPage() {
  const params = useParams<{ slug: string }>();
  const pokemonSuspense = getPokemonSuspense(params.slug ?? "");
  return (
    <ErrorBoundary fallback={<p>Error fetching pokemon detail</p>}>
      <React.Suspense fallback={<p>Loading...</p>}>
        <PokemonDetail pokemonSuspense={pokemonSuspense} />
      </React.Suspense>
    </ErrorBoundary>
  );
}
