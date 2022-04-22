import React from "react";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary";
import { pokemonsApi } from "../../model/Pokemon";
import { createResource } from "../../utils/Resource";
import PokemonDetail, {
  PokemonDetailError,
  PokemonDetailPlaceholder,
} from "./PokemonDetail";

export type PokemonDetailPageParams = {
  slug: string;
};

export default function PokemonDetailPage() {
  const params = useParams<PokemonDetailPageParams>();
  const pokemonDetailResource = createResource(
    pokemonsApi.getPokemonDetail({ slug: params.slug ?? "" })
  );
  return (
    <ErrorBoundary fallback={<PokemonDetailError />}>
      <React.Suspense fallback={<PokemonDetailPlaceholder />}>
        <PokemonDetail resource={pokemonDetailResource} />
      </React.Suspense>
    </ErrorBoundary>
  );
}
