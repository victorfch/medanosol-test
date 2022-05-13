import { useContext} from "react"
import PokeContext from "../../context/PokeContext"
import useField from "../../hooks/useField"
import { useTranslation } from "react-i18next"
import { Input } from "./styles"

export default function Finder() {
	const {store, setStore} = useContext(PokeContext)
	const poke = useField("text")
	const {t} = useTranslation()

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
				<Input placeholder={t("navbar.search")} {...poke} />
			</form>
		</div>
	)
}