import { useContext} from "react"
import PokeLink from "../components/PokeLink";
import PokeContext from "../context/PokeContext";
import { useTranslation } from "react-i18next";
import { FlexContainer, Title } from "./styles";

export default function Home() {
	const {t} = useTranslation()
	const {store} = useContext(PokeContext)

	if (!store.pokemons) return <p>{t("home.loading")}</p>

  	return (
		<div>
			<Title>Pokemons</Title>
			<FlexContainer>
				{ store.filteredPokemons.length > 0 
					? store.filteredPokemons.map(poke => <PokeLink key={poke.name} poke={poke} />)
					: <p>{t("home.pokemons-not-found")}</p>
				}
			</FlexContainer>
		</div>
  	)
}