import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPokemon } from "../services/getPokemon"

export default function PokemonDetails() {
	const {id} = useParams()
	const [pokemon, setPokemon] = useState({})

	useEffect(() => {
		getPokemon(id)
			.then(data => setPokemon(data))
			.catch(e => console.log(e))
	}, [id])

  return (
		<div>
			Detalles del pokemon
		</div>
  )
}