import { useContext} from "react"
import PokeLink from "../components/PokeLink";
import PokeContext from "../context/PokeContext";
import styled from "styled-components"
import { useTranslation } from "react-i18next";

const Title = styled.h1`
	text-align: center;
`

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	height: 100%;
	width: 90%;
	margin-left: auto;
	margin-right: auto;
`

export default function Home() {
	const {t} = useTranslation()
	const {store} = useContext(PokeContext)

	if (!store.pokemons) return <p>{t("home.loading")}</p>

  	return (
		<div>
			<Title>Pokemons</Title>
			<Container>
				{ store.filteredPokemons.length > 0 
					? store.filteredPokemons.map(poke => <PokeLink key={poke.name} poke={poke} />)
					: <p>{t("home.pokemons-not-found")}</p>
				}
			</Container>
		</div>
  	)
}