import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
	border: 1px solid red;
	border-radius: 10px;
	padding: 10px;
	margin: 10px;
	cursor: pointer;
`

const StyledLink = styled(Link)`
	text-decoration: none;
	color: red
`

export default function PokeLink({poke}) {
	const id = poke.url
		.split("/")
		.filter(text => text)
		.pop()
	
  return (
    <Card><StyledLink to={`/pokemon/${id}`}>{poke.name}</StyledLink></Card>
  )
}