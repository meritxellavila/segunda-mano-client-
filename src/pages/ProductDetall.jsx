import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, Navigate } from "react-router-dom";
import API_URL from "../utils/api";
import {
  Button,
  ListGroup,
  Card,
  Container,
  Row,
  Col,
  Collapse,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AddReviews from "../components/AddReviews";
import Favoritos from './Favoritos';
import Spinner from 'react-bootstrap/Spinner';

function ProductDetall() {
  const navigate = useNavigate();

  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/products/${productId}`)
      .then((response) => {
        console.log(response.data);
        setProductDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]); //cade vez que el valor de product id cambie, se ejecutara el useEffect.si fuer []
  // solo se ejecutaria una vez.
  if (productDetails === null) {
    return <Spinner id="spinner" animation="border" variant="warning" />
  }

  const deleteProduct = (indexBorrar) => {
    console.log("borrando", indexBorrar);
    axios
      .delete(`${API_URL}/products/${productId}`)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addFav = async () => {
    try {
      const response = await axios.patch(`${API_URL}/products/${productId}`, {
        isFavorite: true,
      });
      const updatedProductDetails = response.data;
      setFavoritos([...favoritos, updatedProductDetails]);
      navigate("/favoritos")
      console.log("Añadido a favoritos", updatedProductDetails);
    } catch (error) {
      console.error('Error al añadir a favoritos:', error);
    }
  };

  return (
    <>
      <Container>
        <Col>
          <Row>
            <h1 className="titulo">{productDetails.category}</h1>
          </Row>
          <Row>
            <Card style={{ width: "36rem" }}>
              <Card.Img variant="top" src={productDetails.image} />
              <Card.Body>
                <Card.Title>{productDetails.name}</Card.Title>
                <Card.Text>{productDetails.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{productDetails.price}€</ListGroup.Item>
                <ListGroup.Item>
                  {productDetails.usado
                    ? "usado"
                    : productDetails.nuevo
                      ? "nuevo"
                      : "sin especificar"}
                </ListGroup.Item>
                <ListGroup.Item>{productDetails.keyWords}</ListGroup.Item>
                <ListGroup.Item>{productDetails.category}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link>
                  <Link to={`/EditProduct/${productId}`}>Edit Product</Link>
                </Card.Link>
                <AddReviews />
                <Card.Link>
                  <Link to={`/`}>Back</Link>
                </Card.Link>
                {/* <Card.Link>
          <Link to="/favorites">Ver Favoritos</Link>
        </Card.Link> */}
              </Card.Body>
              <Button
                onClick={deleteProduct}
                variant="outline-danger"
                size="lg"
                type="submit"
              >
                Delete
              </Button>
              <br />
              <Button
                onClick={addFav}
                variant="outline-success"
                size="lg"
                type="submit"
              >
                ❤️
              </Button>
              <br />
              <Link to="/favoritos">Ver Favoritos</Link>
            </Card>
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default ProductDetall;
