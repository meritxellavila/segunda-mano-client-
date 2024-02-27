import React, { useEffect, useState } from "react";
import axios from "axios";
import EditProduct from "./EditProduct";
import { useParams, Link } from "react-router-dom";
import API_URL from "../utils/api"
import {Button, ListGroup, Card} from "react-bootstrap";


function ProductDetall() {
const { productId } = useParams();
const [productDetails, setProductDetails] = useState(null);

useEffect(() => {
    axios.get(`${API_URL}/products/${productId}`)     
      .then((response) => {
        console.log(response.data);
        setProductDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
   }, [productId]);//cade vez que el valor de product id cambie, se ejecutara el useEffect.si fuer []
// solo se ejecutaria una vez.
  if (productDetails === null) {
    return <h2>Cargando...</h2>;
  }

  return (
    <>
      <h1>Hello from products details</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={productDetails.image} />
        <Card.Body>
          <Card.Title>{productDetails.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{productDetails.price}€</ListGroup.Item>
          <ListGroup.Item>{productDetails.usado ? "usado" : productDetails.nuevo ? "nuevo": "sin especificar"}</ListGroup.Item>
          <ListGroup.Item>{productDetails.keyWords}</ListGroup.Item>
          <ListGroup.Item>{productDetails.category}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link>Edit Product</Card.Link>
          <Card.Link href="#">Reviews</Card.Link>
        </Card.Body>
        <Button variant="outline-secondary" size="lg" type="submit">
          Delete
          </Button>
      </Card>
    </>
  );
}

export default ProductDetall; 
