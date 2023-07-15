import { API_URL } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokeApi = createApi({
  reducerPath: "pokeApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Pokemon"],
  endpoints: (builder) => ({
    // Query: Get All Pokemon
    getPokemonList: builder.query<IPokemonListResponse, number | void>({
      query: (limit = 20) => `pokemon?limit=${limit}`,
      providesTags: (result, _error, _limit) =>
        result
          ? [{ type: "Pokemon", id: "LIST" }]
          : [{ type: "Pokemon", id: "LIST" }],
    }),
    // Query: Get a single Pokemon
    getPokemon: builder.query<IPokemon, string>({
      query: (name) => `pokemon/${name}`,
      providesTags: (_result, _error, name) => [{ type: "Pokemon", id: name }],
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonQuery } = pokeApi;

interface IPokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    front_default: string;
    back_default: string;
  };
  moves: {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      version_group: {
        name: string;
        url: string;
      };
      move_learn_method: {
        name: string;
        url: string;
      };
    }[];
  }[];
}
