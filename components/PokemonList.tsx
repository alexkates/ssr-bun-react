import React from "react";

function PokemonList({ pokemon }: { pokemon: { name: string; url: string }[] }) {
  return (
    <ul>
      {pokemon.map(({ name }) => (
        <li key={name}>
          <a href={`/pokemon/${name}`}>{name}</a>
        </li>
      ))}
    </ul>
  );
}

export default PokemonList;
