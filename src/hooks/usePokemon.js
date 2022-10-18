import { useEffect, useState } from "react";
import { fetchAllPokemons } from "../helpers/fetchAllPokemons";

export default function usePokemon() {
  const [isLoading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchAllPokemons().then((pokemons) => {
      setLoading(false);
      setPokemons(pokemons);
    });
  }, []);

  return {
    isLoading,
    pokemons,
  };
}
