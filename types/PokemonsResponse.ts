export type PokemonsResponse = {
  count: number;
  next: string;
  results: {
    name: string;
    url: string;
  }[];
};
