import React, { useState } from 'react'
import API_URL from '../utils/api'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddReviews() {
  const [name, setName] = useState("")
  const [stars, setStars] = useState(0)
  const [description, setDescription] = useState("")

  const handleName = (event) => {
    let inputName = event.target.value
    console.log(inputName)
    setName(inputName)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newProduct = {
        name: name
      };
      const response = await axios.post(
        `${API_URL}/reviews`,
        newProduct
      );
      console.log(response);

      setName("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>crear reseña</Form.Label>
          <Form.Control type="type" placeholder="Nombre" />
          <Form.Text className="text-muted"> 
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control type="password" placeholder="descripción" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddReviews