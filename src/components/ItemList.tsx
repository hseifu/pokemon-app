import React from "react";
import PokemonCard from "./PokemonCard";

function ItemList() {
  const pokemonNames = ["ditto", "charizard", "pikachu", "bulbasaur", "eevee"];

  return (
    <div className="h-full grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  m-3">
      {pokemonNames.map((name) => (
        <PokemonCard key={name} name={name} />
      ))}
    </div>
  );
}

export default ItemList;
