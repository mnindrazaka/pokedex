import suspenify from "../utils/suspenify";

export type Pokemon = {
  name: string;
  url: string;
};

export const getPokemons = fetch(
  "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
)
  .then((res) => res.json())
  .then((res) => res.results);

export const getPokemonsSuspense = suspenify<Pokemon[]>(
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((res) => res.json())
    .then((res) => res.results)
);
