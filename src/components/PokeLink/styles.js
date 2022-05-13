import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
	border: 1px solid red;
	border-radius: 10px;
	padding: 10px;
	margin: 10px;
	cursor: pointer;
`

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: red
`