import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Home() {
	let navigate = useNavigate();

	return (
		<div>
			<h1> this is the Home page </h1>
			<Link to="/contact">Contact</Link>
			<br />
			<Button
				onClick={() => {
					navigate("/project");
				}}>
				Projects
			</Button>
			<br />
			<Link to="/contactus:Richard Brandt">Take me Details the CEO</Link>
		</div>
	);
}

export default Home;
