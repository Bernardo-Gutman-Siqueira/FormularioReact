import React from "react";
import { Card, Button } from "react-bootstrap";
export const Catao = ()=>{
    return(
    <>
    <Card style={{ width: '18rem' , height : '32%' }}>
  <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/983115650119663617/987529332454981642/images.1.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="danger">Go somewhere</Button>
  </Card.Body>
</Card>


    </>);
}