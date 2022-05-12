import { Link } from "react-router-dom";

export default function PokeLink({poke}) {
	const id = poke.url
		.split("/")
		.filter(text => text)
		.pop()
	
	const styles = {
		item: {
			border: "1px solid red",
			borderRadius: "10px",
			padding: "10px",
			margin: "10px",
			cursor: "pointer"
		},

		link: {
			textDecoration: "none",
			color: "red"
		}
	}

  return (
    <div style={styles.item}><Link style={styles.link} to={`/pokemon/${id}`}>{poke.name}</Link></div>
  )
}