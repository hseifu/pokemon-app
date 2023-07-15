import React from "react";

interface CardProps {
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
  name,
  height,
  weight,
  abilities,
  types,
  sprites,
  moves,
}: CardProps) {
  return (
    <div className="card card-compact sm:w-48 md:w-72 lg:w-96 bg-base-100 shadow-xl hover:cursor-pointer">
      <figure>
        <img src={sprites.front_default} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
        <p>Abilities: {abilities.join(", ")}</p>
        <p>Types: {types.join(", ")}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Favorites</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
