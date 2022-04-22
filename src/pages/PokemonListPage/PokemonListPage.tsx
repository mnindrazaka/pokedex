import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import { getPokemonListResource } from "../../model/Pokemon";
import PokemonList from "./PokemonList";

export default function PokemonListPage() {
  const pokemonListResource = getPokemonListResource();
  return (
    <ErrorBoundary fallback={<p>something went wrong</p>}>
      <React.Suspense fallback={<p>loading...</p>}>
        <PokemonList resource={pokemonListResource} />
      </React.Suspense>
    </ErrorBoundary>
  );
}
