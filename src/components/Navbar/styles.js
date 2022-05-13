import { Link } from "react-router-dom"
import styled from "styled-components"

export const Nav = styled.nav`
	display: flex;
  	flex-direction: row;
	align-items: center;
	height: 70px;
	justify-content: space-between;
	position: relative;
	padding: 0 50px;
	box-shadow: 0 2px 3px rgb(0, 0, 0, 0.1);
`

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: black
`