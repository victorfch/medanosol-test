import { useState } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

const Picker = styled.div`
	cursor: pointer;
	position: relative;
`

const StyledButton = styled.button`
	background: transparent;
	outline: none;
	border: none;
	padding: 1rem;
	cursor: pointer;
	&:hover {
		background: red;
		color: white;
	}
`

const Dropdown = styled.div`
	background: white;
	box-shadow: 0 2px 3px rgb(0, 0, 0, 0.1);
	visibility: ${props => props.collapsed ? 'visible': 'hidden'};
	opacity: ${props => props.collapsed ? '1': '0'};
	transition: all 0.5s ease;
	position: absolute;
	top: 30px;
	left: -8px;
	display: ${props => props.collapsed ? 'flex': 'none'};
	${props => props.collapsed ? 'flex-direction: column': null}
`

export default function LanguagePicker(){
	const [collapsed, setCollapsed] = useState(false)
	const { t, i18n } = useTranslation()

  return(
		<Picker onClick={() => setCollapsed(!collapsed)}>
			BOX
			<Dropdown collapsed={collapsed}>
				<StyledButton>EN</StyledButton>
				<StyledButton>ES</StyledButton>
				<StyledButton>DE</StyledButton>
			</Dropdown>
		</Picker>
  )

}