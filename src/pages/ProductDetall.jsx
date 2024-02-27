import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, Navigate } from "react-router-dom";
import API_URL from "../utils/api"
import {Button, ListGroup, Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Collapse from 'react-bootstrap/Collapse';
import AddReviews from "../components/AddReviews";


function ProductDetall() {

  const navigate = useNavigate()

  const [open, setOpen] = useState(false)


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


  const deleteProduct = (indexBorrar) =>  {
    console.log("borrando", indexBorrar)

    axios.delete(`${API_URL}/products/${productId}`)
    .then(() => {
      navigate("/")
    })
    .catch((error) => {
      console.log(error)
    })
}


  const addFav = (product) => {
    console.log("añadido", product)
  }



  

  return (
    <>
      <h1>Hello from products details</h1>
      <Card style={{ width: "18rem" }}>
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
          <Card.Link href="#">Edit Product</Card.Link>
          <Button onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Reviews
            <Collapse in={open}>
              <div id="example-collapse-text">
                <AddReviews />
              </div>
            </Collapse>
          </Button>
        </Card.Body>
        <Button onClick={deleteProduct} variant="outline-secondary" size="lg" type="submit">
          Delete
        </Button>
        <button onClick={addFav}>
          ❤️
        </button>
      </Card>
    </>
  );
}

export default ProductDetall; 
