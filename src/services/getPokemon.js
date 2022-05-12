const url = "https://pokeapi.co/api/v2/pokemon"
const getPokemon = async(id) => {
  const response = await fetch(`${url}/${id}`)
  const data = await response.json()
  const {height, weight, name, moves} = data
  const image = data.sprites.front_default
  const totalMoves = moves.length

  return {
		height,
		weight,
		name,
		image,
		totalMoves
  }
}

export {getPokemon}