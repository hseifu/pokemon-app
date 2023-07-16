import PokemonCard from "@/components/PokemonCard";
import { useEffect, useState } from "react";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      setFavorites(parsedFavorites);
    }
  }, [favorites]);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">My Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 -4">
        {favorites.map((name, index) => (
          <div className="flex justify-center" key={index}>
            <PokemonCard name={name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
