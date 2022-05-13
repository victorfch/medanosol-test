import { useParams } from "react-router-dom"
import useSinglePokemon from "../hooks/useSinglePokemon"

export default function PokemonDetails() {
	const {id} = useParams()
	const [pokemon] = useSinglePokemon(id)

  	return (
		<div>
			Detalles del pokemon
			<pre>
				{JSON.stringify(pokemon, null, 2)}
			</pre>
		</div>
  	)
}