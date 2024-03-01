import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from "../utils/api";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Favoritos = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [favoritos, setFavoritos] = useState(null);

  useEffect(() => {
    //solicitud GET para obtener la lista de productos 
    axios
      .get(`${API_URL}/products?isFavorite=true`)
      .then((response) => {
        //actualizar el estado
        console.log(response.data);
        setFavoritos(response.data);
      })
      .catch((error) => {
        console.log(error);
        navigate("/error")
      });
  }, []);  


  if (favoritos === null) {
    return <h1>Cargando...</h1>;
  }


const deleteFavorite = (favId) => {
  console.log("borrando", favId);
  
  const updatedData = {
    isFavorite: false,
  };

  axios
    .patch(`${API_URL}/products/${favId}`, updatedData)
    .then(() => {
      
      console.log(`Product ${favId} modificado`);
    
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    
    });
};




  return (
    <div>
      <Container>
      <Row className="flex-wrap">
          {favoritos.map((fav) => (
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
                    <Link to={/favoritos/}>
                    <Button onClick={() => deleteFavorite(fav.id)} variant="outline-secondary" size="lg" type="submit">
                    🗑️
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
