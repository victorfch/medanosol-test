import { Link } from "react-router-dom";

export default function PokeLink({poke}) {
	const id = poke.url
		.split("/")
		.filter(text => text)
		.pop()

  return (
    <li><Link to={`/pokemon/${id}`}>{poke.name}</Link></li>
  )
}