import React from "react";

type Pokemon = {
  name: string;
  url: string;
};

let status: "success" | "pending" = "pending";
let results: Pokemon[] = [];

let promise = fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  .then((res) => res.json())
  .then((res) => {
    status = "success";
    results = res.results;
  });

function PokemonList() {
  if (status === "pending") {
    throw promise;
  }

  return (
    <ol>
      {results.map((pokemon) => (
        <li key={pokemon.url}>{pokemon.name}</li>
      ))}
    </ol>
  );
}

function App() {
  return (
    <div>
      <React.Suspense fallback="Loading...">
        <PokemonList />
      </React.Suspense>
    </div>
  );
}

export default App;
