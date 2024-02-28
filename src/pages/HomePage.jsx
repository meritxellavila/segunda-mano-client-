import React, { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../utils/api";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";


function HomePage() {
  const [allProducts, setAllProducts] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/products`)
      .then((response) => {
        console.log(response.data);
        setAllProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
        return <h1>No se han encontrado productos</h1>;
      });
  }, []);

  if (allProducts === null) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div>
      <Navbar />
      <Container>
      <Row className="flex-wrap">
          {allProducts.map((eachProduct) => (
            <Col key={eachProduct.id} xs={12} sm={6} md={4} lg={4} className="mb-4">
              <Card className="custom-card">
                <Card.Img variant="top" src={eachProduct.image} alt="imagen" />
                <Card.Body>
                  <Card.Title>{eachProduct.name}</Card.Title>
                  </Card.Body>
                  <Card.Body>
                  <Card.Text>{eachProduct.description}</Card.Text>
                  </Card.Body>
                  <Card.Body>
                  <Card.Text>{eachProduct.price}€</Card.Text>
                </Card.Body>
                <Card.Body>
                     <Link to={`/ProductDetall/${eachProduct.id}`}>
                    <Button variant="outline-secondary" size="lg" type="submit">
                      Ver detalles
                    </Button>
                  </Link>
                </Card.Body>
               
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
