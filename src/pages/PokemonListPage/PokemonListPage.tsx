import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import PokemonList from "./PokemonList";

export default function PokemonListPage() {
  return (
    <ErrorBoundary fallback={<p>something went wrong</p>}>
      <React.Suspense fallback={<p>loading...</p>}>
        <PokemonList />
      </React.Suspense>
    </ErrorBoundary>
  );
}
