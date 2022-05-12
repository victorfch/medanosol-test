import { useEffect, useState } from "react";
import { getPokemon } from "../services/getPokemon";

export default function useSinglePokemon(id) {
	const [pokemon, setPokemon] = useState({})

	useEffect(() => {
		getPokemon(id)
			.then(data => setPokemon(data))
			.catch(e => console.log(e))
	}, [id])

	return [pokemon] 
}