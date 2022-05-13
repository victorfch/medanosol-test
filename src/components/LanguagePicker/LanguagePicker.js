import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Dropdown, Picker, StyledButton } from "./styles"

export default function LanguagePicker(){
	const [collapsed, setCollapsed] = useState(false)
	const { i18n } = useTranslation()

	return (
		<Picker onClick={() => setCollapsed(!collapsed)}>
			{i18n.language.toUpperCase()}
			<Dropdown collapsed={collapsed}>
				<StyledButton onClick={() => i18n.changeLanguage('es')}>ES</StyledButton>
				<StyledButton onClick={() => i18n.changeLanguage('en')}>EN</StyledButton>
				<StyledButton onClick={() => i18n.changeLanguage('de')}>DE</StyledButton>
			</Dropdown>
		</Picker>
  	)
}