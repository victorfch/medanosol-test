import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import useSinglePokemon from "../hooks/useSinglePokemon"
import { Container, Field, Title } from "./styles"

export default function PokemonDetails() {
	const {id} = useParams()
	const [pokemon] = useSinglePokemon(id)
	const {t} = useTranslation()

  	return (
		<Container>
			<Title>{t("pokemon-details.details")}</Title>
			<div style={{width: "60%", marginLeft: "auto", marginRight: "auto"}}>
				<div style={{float: "right"}}>
					<div><Field>{t("pokemon-details.name")}</Field>{pokemon.name}</div>
					<div><Field>{t("pokemon-details.height")}</Field>{pokemon.height}</div>
					<div><Field>{t("pokemon-details.weight")}</Field>{pokemon.weight}</div>
					<div><Field>{t("pokemon-details.moves-number")}</Field>{pokemon.totalMoves}</div>
				</div>

				<div style={{float: "left"}}>
					<img src={pokemon.image} alt={`pokemon ${pokemon.name}`} />
				</div>
			</div>
		</Container>
  	)
}