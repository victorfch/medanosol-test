import { useContext} from "react"
import PokeLink from "../components/PokeLink";
import PokeContext from "../context/PokeContext";

export default function Home() {
	const {store} = useContext(PokeContext)
	const styles = {
		title: {
			textAlign: "center"
		},
		container: {
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "space-between",
			height: "100%",
			width: "90%",
			marginLeft: "auto",
			marginRight: "auto"
		}
	}

	if (!store.pokemons) return <p>Loading</p>

  return (
		<div>
			<h1 style={styles.title}>Pokemons</h1>
			<div style={styles.container}>
				{ store.filteredPokemons.length > 0 
					? store.filteredPokemons.map(poke => <PokeLink key={poke.name} poke={poke} />)
					: <p>No pokemon has been found</p>
				}
			</div>
		</div>
  )
}