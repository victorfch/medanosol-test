import {Route, Routes} from 'react-router-dom'
import Info from '../../pages/Info'
import Contact from '../../pages/Contact'
import Home from '../../pages/Home'
import PokemonDetails from '../../pages/PokemonDetails'
import PageNotFound from '../../pages/PageNotFound'
import PokemonNotFound from '../../pages/PokemonNotFound'

export default function Navigation() {
	return (
		<div style={{minHeight: "78vh"}}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/info' element={<Info />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/pokemon/:id' element={<PokemonDetails />} />
				<Route path='/error' element={<PokemonNotFound />} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</div>
  	)
}