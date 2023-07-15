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
    // Mutation: Create a Pokemon
    createPokemon: builder.mutation<IPokemon, Partial<IPokemon>>({
      query: (pokemon) => ({
        url: "pokemon",
        method: "POST",
        body: pokemon,
      }),
      invalidatesTags: [{ type: "Pokemon", id: "LIST" }],
    }),
    // Mutation: Update Pokemon
    updatePokemon: builder.mutation<IPokemon, { name: string; pokemon: any }>({
      query: ({ name, pokemon }) => ({
        url: `pokemon/${name}`,
        method: "PATCH",
        body: pokemon,
      }),
      invalidatesTags: (result, _error, { name }) =>
        result
          ? [{ type: "Pokemon", id: name }]
          : [{ type: "Pokemon", id: "LIST" }],
    }),

    // Mutation: Delete Pokemon
    deletePokemon: builder.mutation<null, string>({
      query: (name) => ({
        url: `pokemon/${name}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Pokemon", id: "LIST" }],
    }),
  }),
});

export const {
  useGetPokemonListQuery,
  useGetPokemonQuery,
  useCreatePokemonMutation,
  useUpdatePokemonMutation,
  useDeletePokemonMutation,
} = pokeApi;

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
