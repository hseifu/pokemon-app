import { useGetPokemonListQuery } from "@/features/pokemon/pokemonAPI";
import PokemonCard from "./PokemonCard";

function ItemList() {
  const { data: pokemonList, isLoading, isError } = useGetPokemonListQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occurred while fetching the Pokémon list.</p>;
  }

  const pokemonNames =
    pokemonList?.results.map((pokemon) => pokemon.name) || [];

  return (
    <div className="h-full grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  m-3">
      {pokemonNames.map((name) => (
        <PokemonCard name={name} />
      ))}
    </div>
  );
}

export default ItemList;
