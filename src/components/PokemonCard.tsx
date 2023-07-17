import { useEffect, useState } from "react";
import { IPokemon } from "@/features/pokemon/pokemonSlice";
import { useGetPokemonQuery } from "@/features/pokemon/pokemonAPI";
import Card from "./Card";

interface PokemonCardProps {
  name: string;
  onRemoveFavorite?: () => void;
}

function PokemonCard({ name, onRemoveFavorite }: PokemonCardProps) {
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon | null>(null);
  const { data: pokemon, isLoading, isError } = useGetPokemonQuery(name);

  useEffect(() => {
    if (pokemon) {
      setSelectedPokemon(pokemon);
    } else {
      setSelectedPokemon(null);
    }
  }, [pokemon]);
  if (isLoading) {
    return;
  }

  if (isError) {
    return <p>Error occurred while fetching the Pokemon.</p>;
  }

  const handleRemoveFavorite = () => {
    if (onRemoveFavorite) {
      onRemoveFavorite();
    }
  };

  return (
    <div className="p-5">
      {selectedPokemon ? (
        <Card
          id={selectedPokemon.id}
          name={selectedPokemon.name}
          height={selectedPokemon.height}
          weight={selectedPokemon.weight}
          abilities={selectedPokemon.abilities.map(
            (ability) => ability.ability.name
          )}
          types={selectedPokemon.types.map((type) => type.type.name)}
          sprites={selectedPokemon.sprites}
          moves={selectedPokemon.moves.map((move) => move.move.name)}
          onRemoveFavorite={handleRemoveFavorite}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default PokemonCard;
