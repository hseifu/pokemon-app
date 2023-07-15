import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
  selectedPokemon?: IPokemon | null;
}

const initialState: PokemonState = {
  selectedPokemon: null,
};

export const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState,
  reducers: {
    selectPokemon: (state, action: PayloadAction<IPokemon>) => {
      state.selectedPokemon = action.payload;
    },
    clearSelectedPokemon: (state) => {
      state.selectedPokemon = null;
    },
  },
});

export const { selectPokemon, clearSelectedPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;

export interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
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
