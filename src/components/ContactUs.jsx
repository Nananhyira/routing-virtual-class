import React from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import one from "..//1.jpeg";

function ContactUs() {
	let { id } = useParams();
	return (
		<div>
			<h1>contact details of {id} </h1>

			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={one} />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

export default ContactUs;
