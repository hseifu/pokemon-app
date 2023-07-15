import {
  useDeletePokemonMutation,
  useUpdatePokemonMutation,
} from "@/features/pokemon/pokemonAPI";

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
  const [updatePokemon, { isLoading: updatePokemonLoading }] =
    useUpdatePokemonMutation();
  const [deletePokemon, { isLoading: deletePokemonLoading }] =
    useDeletePokemonMutation();

  const handleDelete = (name: string) => {
    if (window.confirm("Are you sure you want to delete this Pokemon?")) {
      deletePokemon(name);
    }
  };

  const handleUpdate = (id: number, updatedData: Partial<CardProps>) => {
    const updatedPokemon = {
      id,
      ...updatedData,
      abilities: updatedData.abilities?.map((ability) => ({
        ability: { name: ability, url: "" },
        is_hidden: false,
        slot: 0,
      })),
    };
    updatePokemon({ name, pokemon: updatedPokemon });
  };

  return (
    <div className="card card-compact sm:w-48 md:w-72 lg:w-96 bg-base-100 shadow-xl hover:cursor-pointer">
      <figure className="flex justify-center items-center h-24">
        <img className="w-1/2" src={sprites.front_default} alt={name} />
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
          <button
            className="btn btn-primary mr-2 hover:bg-slate-800"
            onClick={() => handleUpdate(id, { name: "Updated Name" })}
            disabled={updatePokemonLoading}
          >
            Update
          </button>
          <button
            className="btn bg-red-700 text-white border-0"
            onClick={() => handleDelete(name)}
            disabled={deletePokemonLoading}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
