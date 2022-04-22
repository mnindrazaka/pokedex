import { PokemonDetailResource } from "../../model/Pokemon";

export const PokemonDetailError = () => {
  return <p>Fetching pokemon detail error</p>;
};

export const PokemonDetailPlaceholder = () => {
  return <p>Loading...</p>;
};

export type PokemonDetailProps = {
  resource: PokemonDetailResource;
};

export default function PokemonDetail(props: PokemonDetailProps) {
  const pokemon = props.resource.read();
  return <p>{pokemon.name}</p>;
}
