import React from "react";

type Pokemon = {
  name: string;
  url: string;
};

function suspenify<T>(promise: Promise<T>): { read: () => T } {
  let status: "success" | "pending" = "pending";
  let result: T;

  let suspender = promise.then((res) => {
    status = "success";
    result = res;
  });

  return {
    read: () => {
      if (status === "pending") throw suspender;
      return result;
    },
  };
}

const getPokemons = suspenify<Pokemon[]>(
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((res) => res.json())
    .then((res) => res.results)
);

function PokemonList() {
  const pokemons = getPokemons.read();
  return (
    <ol>
      {pokemons.map((pokemon) => (
        <li key={pokemon.url}>{pokemon.name}</li>
      ))}
    </ol>
  );
}

function App() {
  return (
    <div>
      <React.Suspense fallback={<p>loading...</p>}>
        <PokemonList />
      </React.Suspense>
    </div>
  );
}

export default App;
