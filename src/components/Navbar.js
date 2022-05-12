import styled from "styled-components";
import { Link } from "react-router-dom";
import Finder from "./Finder";
import LanguagePicker from "./LanguagePicker";

const Nav = styled.nav`
	display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
  justify-content: space-between;
  position: relative;
  padding: 0 50px;
  box-shadow: 0 2px 3px rgb(0, 0, 0, 0.1);
`

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black
`

export default function Navbar() {
	return (
		<Nav>
			<div>
				<StyledLink to="/">Home</StyledLink>
			</div>
			<div>
				<StyledLink to="/about">About</StyledLink>
			</div>
			<div>
				<StyledLink to="/contact">Contact us</StyledLink>
			</div>
			<div>
				<Finder />
			</div>
			<div>
				<LanguagePicker />
			</div>
		</Nav>
	)
}



