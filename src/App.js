import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import usePokemons from "./hooks/usePokemons";

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
