import { useState, useEffect } from "react";

interface CardProps {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: string[];
  types: string[];
  sprites: {
    front_default: string;
    back_default: string;
  };
  moves: string[];
}

function Card({
  id,
  name,
  height,
  weight,
  abilities,
  types,
  sprites,
}: CardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the Pokemon is in favorites
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      const parsedFavorites = JSON.parse(favorites);
      setIsFavorite(parsedFavorites.includes(name));
    }
  }, [name]);

  const handleToggleFavorite = () => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      const parsedFavorites = JSON.parse(favorites);
      if (parsedFavorites.includes(name)) {
        // Remove from favorites
        const updatedFavorites = parsedFavorites.filter(
          (favorite: string) => favorite !== name
        );
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setIsFavorite(false);
      } else {
        // Add to favorites
        const updatedFavorites = [...parsedFavorites, name];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setIsFavorite(true);
      }
    } else {
      // Add to favorites (first time)
      const favorites = [name];
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return (
    <div
      className={`card card-compact sm:w-48 md:w-72 lg:w-96 bg-base-100 shadow-xl hover:cursor-pointer `}
    >
      <figure className="flex justify-center items-center h-24">
        <img className="w-24 h-24" src={sprites.front_default} alt={name} />
      </figure>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-sm mb-2">Height: {height}</p>
        <p className="text-sm mb-2">Weight: {weight}</p>
        <div className="mb-2">
          <p className="text-sm font-medium">Abilities:</p>
          <ul className="list-disc list-inside pl-4">
            {abilities.map((ability) => (
              <li key={ability} className="text-sm">
                {ability}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-2">
          <p className="text-sm font-medium">Types:</p>
          <ul className="list-disc list-inside pl-4">
            {types.map((type) => (
              <li key={type} className="text-sm">
                {type}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-actions flex justify-end">
          <div
            className={`rating bg-slate-500 p-3 rounded-lg `}
            onClick={handleToggleFavorite}
          >
            <input
              type="radio"
              name={`rating-${id}`}
              className={`mask mask-star-2 ${
                isFavorite ? "bg-yellow-300" : "bg-white"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
