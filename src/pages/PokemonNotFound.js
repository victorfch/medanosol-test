import { useTranslation } from "react-i18next";
import { Container, Title } from "./styles";

export default function PokemonNotFound() {
    const {t} = useTranslation()
    return (
        <Container>
            <Title>{t("no-pokemon")}</Title>
        </Container>
    )
}