import { useContext} from "react"
import PokeContext from "../context/PokeContext"
import useField from "../hooks/useField"

export default function Finder() {
	const {store, setStore} = useContext(PokeContext)
	const poke = useField("text")

	const styles = {
		input: {
			outline: "none",
			padding: "10px",
			border: "1px solid #b1b3b5",
			borderRadius: "5px"
		}
	}

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
				<input style={styles.input} placeholder="Search pokemon" {...poke} />
			</form>
		</div>
	)
}