import { configureStore } from "@reduxjs/toolkit";
import { pokeApi } from "@/features/pokemon/pokemonAPI";
import pokemonReducer from "@/features/pokemon/pokemonSlice";

export const pokemonStore = configureStore({
  reducer: {
    [pokeApi.reducerPath]: pokeApi.reducer,
    pokemonSlice: pokemonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokeApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof pokemonStore.getState>;
export type AppDispatch = typeof pokemonStore.dispatch;
