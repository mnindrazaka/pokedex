import { createResource, Resource } from "../utils/Resource";

export type Pokemon = {
  name: string;
  url: string;
};

export const getPokemonList = () =>
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((res) => res.json())
    .then((res) => res.results);

export const getPokemonListResource = () =>
  createResource<Pokemon[]>(getPokemonList());

export type PokemonListResource = Resource<Pokemon[]>;

export const getPokemonDetail = (slug: string) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`).then((res) => res.json());

export const getPokemonDetailResource = (slug: string) =>
  createResource<Pokemon>(getPokemonDetail(slug));

export type PokemonDetailResource = Resource<Pokemon>;
