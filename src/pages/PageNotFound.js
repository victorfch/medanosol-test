import { useTranslation } from "react-i18next";
import { Container, Title } from "./styles";

export default function PageNotFound() {
    const {t} = useTranslation()
    return (
        <Container>
            <Title>{t("error")}</Title>
            <h2 style={{textAlign: "center"}}>{t("page-not-found")}</h2>
        </Container>
    )

}