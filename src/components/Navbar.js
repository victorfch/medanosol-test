import { Link } from "react-router-dom";
import Finder from "./Finder";

export default function Navbar() {
	const styles = {
    navbar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "70px",
        justifyContent: "space-between",
        position: "relative",
        padding: "0 50px",
        boxShadow: "0 2px 3px rgb(0, 0, 0, 0.1)"
    },
		link: {
			textDecoration: "none",
			color: "black"
		} 
	}

	return (
		<nav style={styles.navbar}>
			<div>
				<Link style={styles.link} to="/">Home</Link>
			</div>
			<div>
				<Link style={styles.link} to="/about">About</Link>
			</div>
			<div>
				<Link style={styles.link} to="/contact">Contact us</Link>
			</div>
			<div>
				<Finder />
			</div>
		</nav>
	)
}



