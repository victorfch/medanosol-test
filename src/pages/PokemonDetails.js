import { useTranslation } from "react-i18next"
import { Navigate, useParams } from "react-router-dom"
import useSinglePokemon from "../hooks/useSinglePokemon"
import { Container, Field, InfoContainer, Title } from "./styles"

export default function PokemonDetails() {
	const {id} = useParams()
	const [pokemon, error, loading] = useSinglePokemon(id)
	const {t} = useTranslation()

	if (error) {
		return (<Navigate to="/error" />)
	}

	if (loading) {
		return (<p>{t("home.loading")}</p>)
	}

  	return (
		<Container>
			<Title>{t("pokemon-details.details")}</Title>
			<InfoContainer>
				<div style={{float: "right"}}>
					<div><Field>{t("pokemon-details.name")}</Field>{pokemon.name}</div>
					<div><Field>{t("pokemon-details.height")}</Field>{pokemon.height}</div>
					<div><Field>{t("pokemon-details.weight")}</Field>{pokemon.weight}</div>
					<div><Field>{t("pokemon-details.moves-number")}</Field>{pokemon.totalMoves}</div>
				</div>
				<div style={{float: "left"}}>
					<img src={pokemon.image} alt={`pokemon ${pokemon.name}`} />
				</div>
			</InfoContainer>
		</Container>
  	)
}