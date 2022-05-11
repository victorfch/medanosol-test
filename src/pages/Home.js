import { useEffect, useState } from "react"
import PokeLink from "../components/PokeLink";
import { getPokemons } from "../services/getPokemons"

export default function Home() {
	const [pokemons, setPokemons] = useState([]);
	useEffect(() => {
		getPokemons()
			.then(data => setPokemons(data))
			.catch(e => console.log(e))
	}, [])

	if (!pokemons) return <p>Loading</p>

  return (
		<div>
			<h1>Pokemons</h1>
			<div>
				<ul>
					{pokemons.map(poke => <PokeLink key={poke.name} poke={poke} />)}
				</ul>
			</div>
		</div>
  )
}