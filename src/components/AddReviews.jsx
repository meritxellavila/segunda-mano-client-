import React, { useEffect, useState } from 'react'
import API_URL from '../utils/api'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Collapse from 'react-bootstrap/Collapse';
import { useParams } from 'react-router-dom';

function AddReviews() {

  const params = useParams()

  const [name, setName] = useState("")
  const [stars, setStars] = useState(0)
  const [description, setDescription] = useState("")
  const [review, setReview] = useState([])
  const [open, setOpen] = useState(false)

  const handleName = (event) => {
    let inputName = event.target.value
    console.log(inputName)
    setName(inputName)
  }

  const handleStars = (event) => {
    let inputStars = event.target.value
    setStars(inputStars)
  }

  const handleDescription = (event) => {
    let inputDescription = event.target.value
    setDescription(inputDescription)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newReview = {
        name: name,
        description: description,
        stars: stars
      };
      const response = await axios.post(
        `${API_URL}/reviews`,
        newReview
      );
      console.log(response);

      setName("");
      setDescription("")
      setStars(0)
      setReview([...review, response.data])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios.get(`${API_URL}/reviews`)
      .then((response) => {
        console.log(response.data)
        setReview(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const deleteReview = (reviewID) => {
    console.log(reviewID)

    axios.delete(`${API_URL}/reviews/${reviewID}`)
      .then((response) => {
        axios.get(`${API_URL}/reviews`)
          .then((response) => {
            console.log(response.data)
            setReview(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
        //debemos actualizar el estado review con todas las reseñas, despues de eliminar 1
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Crear Reseña
      </Button>
      <Collapse in={open}>
        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control value={name} onChange={handleName} type="name" placeholder="Nombre" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Calificación</Form.Label>
              <Form.Control value={stars} onChange={handleStars} type='number' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control value={description} onChange={handleDescription} type="name" placeholder="descripcion" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Collapse>
      <div>
        <h2>Reseñas:</h2>
        <ul>
          {review.map((review) => {
            return (
              <li id='reseñas' key={review.id}>
                <p>Nombre: {review.name}</p>
                <p>Descripción: {review.description}</p>
                <p>Calificación: {review.stars}</p>
                <Button onClick={() => deleteReview(review.id)}>
                  🗑️
                </Button>
                <Button>
                  Editar
                </Button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default AddReviews