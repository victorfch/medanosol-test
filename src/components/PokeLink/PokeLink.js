import { Card, StyledLink } from "./styles"

export default function PokeLink({poke}) {
	const id = poke.url
		.split("/")
		.filter(text => text)
		.pop()
	
  	return (
    	<Card><StyledLink to={`/pokemon/${id}`}>{poke.name}</StyledLink></Card>
  	)
}