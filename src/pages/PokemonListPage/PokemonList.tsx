import { Link } from "react-router-dom";
import { Resource } from "../../utils/Resource";
import { Pokemon } from "../../__generated__/api";

export const PokemonListError = () => {
  return <p>Fetching pokemon list error</p>;
};

export const PokemonListPlaceholder = () => {
  return <p>Loading...</p>;
};

export type PokemonListProps = {
  resource: Resource<Pokemon[]>;
};

export default function PokemonList(props: PokemonListProps) {
  const pokemons = props.resource.read();
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
