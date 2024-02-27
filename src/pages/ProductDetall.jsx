import React, { useEffect, useState } from "react";
import axios from "axios";
import EditProduct from "./EditProduct";
import { useParams, Link } from "react-router-dom";
import API_URL from "../utils/api"
import {Button, ListGroup, Card, Container, Row, Col } from "react-bootstrap";


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
    <Container>
      <Col>
      <Row>
      <h1 className="">{productDetails.category}</h1>
      </Row>
      <Row>
      <Card style={{ width: "36rem" }}>
        <Card.Img variant="top" src={productDetails.image} />
        <Card.Body>
          <Card.Title>{productDetails.name}</Card.Title>
          <Card.Text>
          {productDetails.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{productDetails.price}€</ListGroup.Item>
          <ListGroup.Item>{productDetails.usado ? "usado" : productDetails.nuevo ? "nuevo": "sin especificar"}</ListGroup.Item>
          <ListGroup.Item>{productDetails.keyWords}</ListGroup.Item>
          <ListGroup.Item>{productDetails.category}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link>
            <Link to={`/EditProduct/${productId}`}>Edit Product</Link>
          </Card.Link>
          <Card.Link href="#">Reviews</Card.Link>
        </Card.Body>
        <Button variant="outline-secondary" size="lg" type="submit">
          Delete
          </Button>
      </Card>
      </Row>
      </Col>
      </Container>
    </>
  );
}

export default ProductDetall; 
