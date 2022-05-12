import { createContext, useState } from "react"

const initialStore = {
	pokemons: [],
	filteredPokemons: []
}

const PokeContext = createContext()

export function PokeContextProvider({children}) {
	const [store, setStore] = useState(initialStore)
	
  return (
		<PokeContext.Provider value={{store, setStore}}>
			{children}
		</PokeContext.Provider>
  )
}

export default PokeContext