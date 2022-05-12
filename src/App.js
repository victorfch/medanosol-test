import { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import PokeContext from "./context/PokeContext";
import { getPokemons } from "./services/getPokemons";

function App() {
  const {store, setStore} = useContext(PokeContext)
  
	useEffect(() => {
		getPokemons()
			.then(data => setStore({
        ...store,
        filteredPokemons: data,
        pokemons: data
      }))
			.catch(e => console.log(e))
	}, [])

  return (
    <div>
      <Navbar />
      <Navigation />
    </div>
  );
}

export default App;
