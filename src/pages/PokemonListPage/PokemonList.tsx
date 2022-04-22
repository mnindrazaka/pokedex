import { getPokemonsSuspense } from "../../model/Pokemon";

export default function PokemonList() {
  const pokemons = getPokemonsSuspense.read();
  return (
    <ol>
      {pokemons.map((pokemon) => (
        <li key={pokemon.url}>{pokemon.name}</li>
      ))}
    </ol>
  );
}
