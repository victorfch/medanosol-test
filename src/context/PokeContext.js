import { createContext, useState } from "react"

const PokeContext = createContext()

export function PokeContextProvider({children}) {
	const [pokemons, setPokemons] = useState([])
  return (
		<PokeContext.Provider value={{pokemons, setPokemons}}>
			{children}
		</PokeContext.Provider>
  )
}

export default PokeContext