import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from "../utils/api";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/products`)
      .then((response) => {
        console.log(response.data);
        setFavoritos(response.data);
      })
      .catch((error) => {
        console.log(error);
        return <h1>No se han encontrado productos</h1>;
      });
  }, []);  

  if (favoritos === null) {
    return <h1>Cargando...</h1>;
  }

  const favoritosToShow = favoritos.filter((fav) => fav.isFavorite);

  return (
    <div>
      <Container>
      <Row className="flex-wrap">
          {favoritosToShow.map((fav) => (
            <Col key={fav.id} xs={12} sm={6} md={4} lg={4} className="mb-4">
              <Card className="custom-card">
                <Card.Img variant="top" src={fav.image} alt="imagen" />
                <Card.Body>
                  <Card.Title>{fav.name}</Card.Title>
                  </Card.Body>
                  <Card.Body>
                  <Card.Text>{fav.description}</Card.Text>
                  </Card.Body>
                  <Card.Body>
                  <Card.Text>{fav.price}€</Card.Text>
                </Card.Body>
                <Card.Body>
                     <Link to={`/ProductDetall/${fav.id}`}>
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
};

export default Favoritos;
