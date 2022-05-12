import { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import PokeContext from "./context/PokeContext";
import usePokemons from "./hooks/usePokemons";
import { getPokemons } from "./services/getPokemons";

function App() {
  usePokemons()

  return (
    <div>
      <Navbar />
      <Navigation />
    </div>
  );
}

export default App;
