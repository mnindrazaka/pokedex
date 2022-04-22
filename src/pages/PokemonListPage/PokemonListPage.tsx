import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import { getPokemonsSuspense } from "../../model/Pokemon";
import PokemonList from "./PokemonList";

export default function PokemonListPage() {
  const pokemonSuspense = getPokemonsSuspense();
  return (
    <ErrorBoundary fallback={<p>something went wrong</p>}>
      <React.Suspense fallback={<p>loading...</p>}>
        <PokemonList pokemonSuspense={pokemonSuspense} />
      </React.Suspense>
    </ErrorBoundary>
  );
}
