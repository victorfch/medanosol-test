import Finder from "../Finder";
import LanguagePicker from "../LanguagePicker";
import {useTranslation} from 'react-i18next'
import { Nav, StyledLink } from "./styles";

export default function Navbar() {
	const {t} = useTranslation()
	return (
		<Nav>
			<div>
				<StyledLink to="/">{t("navbar.home")}</StyledLink>
			</div>
			<div>
				<StyledLink to="/info">{t("navbar.info")}</StyledLink>
			</div>
			<div>
				<StyledLink to="/contact">{t("navbar.contact-us")}</StyledLink>
			</div>
			<div>
				<Finder />
			</div>
			<div>
				<LanguagePicker />
			</div>
		</Nav>
	)
}



