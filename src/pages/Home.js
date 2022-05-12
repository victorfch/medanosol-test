import { useContext} from "react"
import PokeLink from "../components/PokeLink";
import PokeContext from "../context/PokeContext";

export default function Home() {
	const {store} = useContext(PokeContext)

	if (!store.pokemons) return <p>Loading</p>

  return (
		<div>
			<h1>Pokemons</h1>
			<div>
				<ul>
					{ store.filteredPokemons.length > 0 
						? store.filteredPokemons.map(poke => <PokeLink key={poke.name} poke={poke} />)
						: <p>No pokemon has been found</p>
					}
				</ul>
			</div>
		</div>
  )
}