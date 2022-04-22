import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import { getPokemonListResource } from "../../model/Pokemon";
import PokemonList, {
  PokemonListError,
  PokemonListPlaceholder,
} from "./PokemonList";

export default function PokemonListPage() {
  const pokemonListResource = getPokemonListResource();
  return (
    <ErrorBoundary fallback={<PokemonListError />}>
      <React.Suspense fallback={<PokemonListPlaceholder />}>
        <PokemonList resource={pokemonListResource} />
      </React.Suspense>
    </ErrorBoundary>
  );
}
