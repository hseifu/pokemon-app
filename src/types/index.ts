export type FetchPokemonAPIResponse = {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: Ability[];
  types: Type[];
  sprites: Sprites;
  moves: Move[];
};

export type AbilityApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Ability[];
};

export type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type Sprites = {
  front_default: string;
  back_default: string;
};

export type Move = {
  move: {
    name: string;
    url: string;
  };
  version_group_details: VersionGroupDetail[];
};

export type VersionGroupDetail = {
  level_learned_at: number;
  version_group: {
    name: string;
    url: string;
  };
  move_learn_method: {
    name: string;
    url: string;
  };
};
