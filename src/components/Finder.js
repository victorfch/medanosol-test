import { useContext} from "react"
import PokeContext from "../context/PokeContext"
import useField from "../hooks/useField"
import styled from "styled-components"

const Input = styled.input`
	outline: none;
	padding: 10px;
	border: 1px solid #b1b3b5;
	border-radius: 5px;
`

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
				<Input placeholder="Search pokemon" {...poke} />
			</form>
		</div>
	)
}