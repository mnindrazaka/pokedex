import { PokemonDetailResource } from "../../model/Pokemon";

export type PokemonDetailProps = {
  resource: PokemonDetailResource;
};

export default function PokemonDetail(props: PokemonDetailProps) {
  const pokemon = props.resource.read();
  return <p>{pokemon.name}</p>;
}
