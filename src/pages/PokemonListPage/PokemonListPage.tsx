import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import { pokemonsApi } from "../../model/Pokemon";
import { createResource } from "../../utils/Resource";
import PokemonList, {
  PokemonListError,
  PokemonListPlaceholder,
} from "./PokemonList";

export default function PokemonListPage() {
  const pokemonListResource = createResource(
    pokemonsApi.getPokemonList().then((res) => res.results)
  );
  return (
    <ErrorBoundary fallback={<PokemonListError />}>
      <React.Suspense fallback={<PokemonListPlaceholder />}>
        <PokemonList resource={pokemonListResource} />
      </React.Suspense>
    </ErrorBoundary>
  );
}
