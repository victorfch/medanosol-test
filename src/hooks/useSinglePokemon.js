import { useEffect, useState } from "react";
import { getPokemon } from "../services/getPokemon";

export default function useSinglePokemon(id) {
	const [pokemon, setPokemon] = useState({})
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getPokemon(id)
			.then(data => {
				setPokemon(data)
				setLoading(false)
			})
			.catch(() => setError(true))
	}, [id])

	return [pokemon, error, loading]
}