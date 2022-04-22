import { Link } from "react-router-dom";
import { Pokemon } from "../../model/Pokemon";
import { Suspenify } from "../../utils/suspenify";

export type PokemonListProps = {
  pokemonSuspense: Suspenify<Pokemon[]>;
};

export default function PokemonList(props: PokemonListProps) {
  const pokemons = props.pokemonSuspense.read();
  return (
    <ol>
      {pokemons.map((pokemon) => (
        <li key={pokemon.url}>
          <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
        </li>
      ))}
    </ol>
  );
}
