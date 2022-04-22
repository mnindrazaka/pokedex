import { Resource } from "../../utils/Resource";
import { Pokemon } from "../../__generated__/api";

export const PokemonDetailError = () => {
  return <p>Fetching pokemon detail error</p>;
};

export const PokemonDetailPlaceholder = () => {
  return <p>Loading...</p>;
};

export type PokemonDetailProps = {
  resource: Resource<Pokemon>;
};

export default function PokemonDetail(props: PokemonDetailProps) {
  const pokemon = props.resource.read();
  return <p>{pokemon.name}</p>;
}
