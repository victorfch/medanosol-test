import { useContext, useEffect } from "react";
import PokeContext from "../context/PokeContext";
import { getPokemons } from "../services/getPokemons";

export default function usePokemons() {
	const {store, setStore} = useContext(PokeContext)

	useEffect(() => {
		getPokemons()
			.then(data => setStore({
        		...store,
        		filteredPokemons: data,
        		pokemons: data
      		}))
			.catch(e => console.log(e))
	}, [])
}