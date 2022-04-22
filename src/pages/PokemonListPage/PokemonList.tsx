import { Link } from "react-router-dom";
import { PokemonListResource } from "../../model/Pokemon";

export type PokemonListProps = {
  resource: PokemonListResource;
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
