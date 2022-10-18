import { useState } from "react";
import { Loading } from "../components/Loading";
import { PokemonRow } from "../components/PokemonRow";
import usePokemon from "../hooks/usePokemon";

export const HomePage = () => {
  const { isLoading, pokemons } = usePokemon();
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");

  const pokemonsByName = () =>
    pokemons.filter((poke) => poke.name.includes(search));
  const filteredPokemons = () => {
    if (search.length === 0)
      return pokemons.slice(currentPage, currentPage + 5);

    return pokemonsByName().slice(currentPage, currentPage + 5);
  };

  const thereAreMorePokemons = () => pokemonsByName().length > currentPage + 5;

  const previousPage = () => {
    setCurrentPage(currentPage - 5);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 5);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setCurrentPage(0);
    setSearch(value);
  };

  const isFirstPage = currentPage === 0;

  return (
    <div className="mt-5">
      <h1>List of Pókemons</h1>
      <hr />

      <input
        type="text"
        className="mb-5"
        placeholder="Buscar pokemon"
        search={search}
        onChange={handleSearchChange}
      />

      <button
        className="btn btn-primary"
        onClick={previousPage}
        disabled={isFirstPage}
      >
        Previous
      </button>
      <button
        className="btn btn-primary ms-1"
        onClick={nextPage}
        disabled={!thereAreMorePokemons()}
      >
        Next
      </button>
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: 100 }}>ID</th>
            <th style={{ width: 150 }}>Name</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {filteredPokemons().map(({ id, name, pic }) => (
            <PokemonRow id={id} name={name} pic={pic} key={id} />
          ))}
        </tbody>
      </table>
      {isLoading && <Loading />}
    </div>
  );
};
