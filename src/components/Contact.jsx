import React from "react";
import { Link } from "react-router-dom";

function Contact() {
	return (
		<div>
			<h1>this is the Contact page </h1>

			<Link to="/contactus:Richard">Contact the CEO</Link>
		</div>
	);
}

export default Contact;
