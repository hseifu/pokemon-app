import { useEffect, useState } from "react";
import PokemonCard from "@/components/PokemonCard";
import Spinner from "@/components/Spinner";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { removeFavorite, setFavorites } from "@/features/pokemon/pokemonSlice";

function Favorites() {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(
    (state) => state.pokemonSlice.favorites.favorites
  );

  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      dispatch(setFavorites(parsedFavorites));
    }
  }, [dispatch]);

  const handleRemoveFavorite = (name: string) => {
    dispatch(removeFavorite(name));
  };

  if (showSpinner) {
    return <Spinner />;
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">My Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {favorites.length ? (
          favorites.map((name, index) => (
            <div key={index} className="flex justify-center">
              <PokemonCard
                name={name}
                onRemoveFavorite={() => handleRemoveFavorite(name)}
              />
            </div>
          ))
        ) : (
          <div>
            <p>
              No more pokemons. Add a few to your favorites to view them here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
