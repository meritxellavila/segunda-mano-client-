import React, { useEffect, useState } from 'react'
import API_URL from '../utils/api'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import {
  Button,
  ListGroup,
  Card,
  Container,
  Row,
  Col,
  Collapse,
} from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';

export default function ListProducts() {

  const navigate = useNavigate()
  const params = useParams()

  const [categoryProducts, setCategoryProducts] = useState(null)

  useEffect(() => {
    axios.get(`${API_URL}/products?category=${params.category}`)
    .then((response) => {
      console.log(response.data)
      setCategoryProducts(response.data)
    })
    .catch((error) => {
      console.log(error)
      navigate("/error")
    })
  }, [params.category])

  if (categoryProducts === null) {
    return <Spinner animation="border" variant="warning" />
  }


  return (
    <div>  
      <Container>
        <Col>
          <Row>
            <Card style={{ width: "25rem"}}>
              <div>
                {categoryProducts.map((eachProductCategory) => {
                  return(
                    <div key={eachProductCategory.id}>
                      <Card.Img variant="top" src={eachProductCategory.image} />
                      <Card.Body>
                        <h2>{eachProductCategory.name}</h2>
                      </Card.Body>
                      <h3>{eachProductCategory.description}</h3>
                      <br />
                      <p>{eachProductCategory.price}€</p>
                      <Link to={`/ProductDetall/${eachProductCategory.id}`}>Ver Detalles</Link>
                    </div>
                  )
                })}
              </div>
            </Card>
          </Row>
        </Col>
      </Container>
    </div>
  )
}