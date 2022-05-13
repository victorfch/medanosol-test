import styled from "styled-components"

export const StyledButton = styled.button`
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

export const Picker = styled.div`
	cursor: pointer;
	position: relative;
	border: 1px solid red;
	padding: 10px;
	border-radius: 5px
`

export const Dropdown = styled.div`
	background: white;
	box-shadow: 0 2px 3px rgb(0, 0, 0, 0.1);
	visibility: ${props => props.collapsed ? 'visible': 'hidden'};
	opacity: ${props => props.collapsed ? '1': '0'};
	transition: all 0.5s ease;
	position: absolute;
	top: 50px;
	left: -8px;
	display: ${props => props.collapsed ? 'flex': 'none'};
	${props => props.collapsed ? 'flex-direction: column': null}
`
