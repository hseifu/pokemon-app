import { useEffect, useState } from "react";
import { useGetPokemonListQuery } from "@/features/pokemon/pokemonAPI";
import PokemonCard from "./PokemonCard";
import Spinner from "./Spinner";

function ItemList() {
  const { data: pokemonList, isLoading, isError } = useGetPokemonListQuery();
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (showSpinner) {
    return <Spinner />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>Error occurred while fetching the Pokémon list.</p>;
  }

  const pokemonNames =
    pokemonList?.results.map((pokemon) => pokemon.name) || [];

  return (
    <div className="h-full grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  m-3">
      {pokemonNames.map((name, index) => (
        <PokemonCard key={index} name={name} />
      ))}
    </div>
  );
}

export default ItemList;
