const url = "https://pokeapi.co/api/v2/pokemon?limit=151"
const getPokemons = async() => {
  const response = await fetch(url)
  const {results} = await response.json()
	
	return results
}

export {getPokemons}