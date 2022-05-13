import { useTranslation } from "react-i18next"
import { StyledFooter } from "./styles"

export default function Footer() {
    const {t} = useTranslation()

    return (
        <StyledFooter>
            {t("footer")}
        </StyledFooter>
    )
}