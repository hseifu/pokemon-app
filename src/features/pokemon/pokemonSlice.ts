import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/stores/pokemonStore";

interface FilterState {
  type: string | null;
}

interface SortState {
  type: "ascending" | "descending" | null;
}

interface PokemonState {
  selectedPokemon?: IPokemon | null;
  filter: FilterState;
  sort: SortState;
}

const initialFilterState: FilterState = {
  type: null,
};

const initialSortState: SortState = {
  type: null,
};

const initialState: PokemonState = {
  selectedPokemon: null,
  filter: initialFilterState,
  sort: initialSortState,
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
    setFilterType: (state, action: PayloadAction<string>) => {
      state.filter.type = action.payload;
    },
    clearFilterType: (state) => {
      state.filter.type = null;
    },
    setSortType: (state, action: PayloadAction<"ascending" | "descending">) => {
      state.sort.type = action.payload;
    },
    clearSortType: (state) => {
      state.sort.type = null;
    },
  },
});

export const {
  selectPokemon,
  clearSelectedPokemon,
  setFilterType,
  clearFilterType,
  setSortType,
  clearSortType,
} = pokemonSlice.actions;

// Selectors to access the state
export const selectSelectedPokemon = (state: RootState) =>
  state.pokemonSlice.selectedPokemon;
export const selectFilterType = (state: RootState) =>
  state.pokemonSlice.filter.type;
export const selectSortType = (state: RootState) =>
  state.pokemonSlice.sort.type;

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
