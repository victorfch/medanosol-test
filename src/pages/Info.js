import { useTranslation } from "react-i18next";
import { Container, InfoContainer, Title } from "./styles";

export default function Info() {
	const {t} = useTranslation()
	return (
		<Container>
			<Title>{t("info.title")}</Title>
			<InfoContainer>
				<h2>{t("info.structure")}</h2>
				<ul>
					<li>
						components
						<ul>
							<li>Finder</li>
							<li>Footer</li>
							<li>LanguagePicker</li>
							<li>Navbar</li>
							<li>PokeLink</li>
						</ul>
					</li>
					<li>context</li>
					<li>
						hooks
						<ul>
							<li>useField</li>
							<li>usePokemons</li>
							<li>useSinglePokemon</li>
						</ul>
					</li>
					<li>
						locales
						<ul>
							<li>de</li>
							<li>en</li>
							<li>es</li>
						</ul>
					</li>
					<li>
						pages
						<ul>
							<li>Contact</li>
							<li>Home</li>
							<li>Info</li>
							<li>PageNotFound</li>
							<li>PokemonDetails</li>
							<li>PokemonNotFound</li>
							<li>styles</li>
						</ul>
					</li>
					<li>
						services
						<ul>
							<li>getPokemon</li>
							<li>getPokemons</li>
						</ul>
					</li>
					<li>i18n</li>
				</ul>
			</InfoContainer>
		</Container>
  	)
}