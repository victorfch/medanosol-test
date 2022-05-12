import {Link, Route, Routes} from 'react-router-dom'
import { PokeContextProvider } from '../context/PokeContext'
import About from '../pages/About'
import Home from '../pages/Home'

export default function Navigation() {
  return(
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/contact">Contact us</Link></li>
			</ul>
			<PokeContextProvider>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</PokeContextProvider>
		</div>
	)
}