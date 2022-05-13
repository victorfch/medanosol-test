import Footer from "./components/Footer/index.js";
import Navbar from "./components/Navbar/index.js";
import Navigation from "./components/Navigation/index.js";
import usePokemons from "./hooks/usePokemons";

function App() {
    usePokemons()

    return (
        <div>
            <Navbar />
            <Navigation />
            <Footer />
        </div>
    );
}

export default App;
