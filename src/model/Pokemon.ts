import { Configuration, PokemonsApi } from "../__generated__/api";

export * from "../__generated__/api";

const configuration = new Configuration({
  basePath: "https://pokeapi.co/api/v2",
});

export const pokemonsApi = new PokemonsApi(configuration);
