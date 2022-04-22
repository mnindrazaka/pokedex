import { Pokemon } from "../../model/Pokemon";
import { Suspenify } from "../../utils/suspenify";

export type PokemonDetailProps = {
  pokemonSuspense: Suspenify<Pokemon>;
};

export default function PokemonDetail(props: PokemonDetailProps) {
  const pokemon = props.pokemonSuspense.read();
  return <p>{pokemon.name}</p>;
}
