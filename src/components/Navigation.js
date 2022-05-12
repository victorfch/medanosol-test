import {Route, Routes} from 'react-router-dom'
import { PokeContextProvider } from '../context/PokeContext'
import About from '../pages/About'
import Home from '../pages/Home'
import PokemonDetails from '../pages/PokemonDetails'

export default function Navigation() {
  return(
	<div>
		<PokeContextProvider>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/pokemon/:id' element={<PokemonDetails />} />
			</Routes>
		</PokeContextProvider>
	</div>
	)
}