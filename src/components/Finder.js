import { useContext, useState } from "react"
import PokeContext from "../context/PokeContext"

export default function Finder() {
	const [poke, setPoke] = useState('')
	const {store, setStore} = useContext(PokeContext)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!poke){
			setStore({
				...store,
				filteredPokemons: store.pokemons
			})
			return
		} 
		
		const filterPokemon = store.pokemons.filter(({name}) => name === poke)
		setStore({
			...store,
			filteredPokemons: filterPokemon
		})

	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input placeholder="Search pokemon" onChange={({target}) => setPoke(target.value)} type="text" value={poke} />
			</form>
		</div>
	)
}