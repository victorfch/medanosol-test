import { useContext} from "react"
import PokeContext from "../context/PokeContext"
import useField from "../hooks/useField"

export default function Finder() {
	const {store, setStore} = useContext(PokeContext)
	const poke = useField("text")

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!poke.value){
			setStore({...store, filteredPokemons: store.pokemons})
			return
		} 
		
		const filterPokemon = store.pokemons.filter(({name}) => name.includes(poke.value))
		setStore({...store, filteredPokemons: filterPokemon})
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input placeholder="Search pokemon" {...poke} />
			</form>
		</div>
	)
}