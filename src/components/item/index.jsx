import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img as={Image} variant="top" src={product.image} fluid={true} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
