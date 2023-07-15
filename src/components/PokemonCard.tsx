import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPokemon,
  clearSelectedPokemon,
} from "@/features/pokemon/pokemonSlice";
import { useGetPokemonQuery } from "@/features/pokemon/pokemonAPI";
import Card from "./Card";
import { RootState } from "@/stores/pokemonStore";

interface PokemonCardProps {
  name: string;
}

function PokemonCard({ name }: PokemonCardProps) {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector(
    (state: RootState) => state.pokemonSlice.selectedPokemon
  );
  const { data: pokemon, isLoading, isError } = useGetPokemonQuery(name);

  useEffect(() => {
    if (pokemon) {
      dispatch(selectPokemon(pokemon));
    } else {
      dispatch(clearSelectedPokemon());
    }
  }, [pokemon, dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occurred while fetching the Pokemon.</p>;
  }

  return (
    <div>
      {selectedPokemon ? (
        <Card
          name={selectedPokemon.name}
          height={selectedPokemon.height}
          weight={selectedPokemon.weight}
          abilities={selectedPokemon.abilities.map(
            (ability) => ability.ability.name
          )}
          types={selectedPokemon.types.map((type) => type.type.name)}
          sprites={selectedPokemon.sprites}
          moves={selectedPokemon.moves.map((move) => move.move.name)}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default PokemonCard;
