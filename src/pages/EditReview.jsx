import React, { useEffect, useState } from 'react'
import { Form, FloatingLabel, Button, InputGroup, Container } from "react-bootstrap";
import axios from "axios";
import API_URL from "../utils/api";
import { useNavigate, useParams, Link } from "react-router-dom";
import Navbar from '../components/Navbar';


function EditReview() {
    const params = useParams()
    const navigate = useNavigate()


    const [name, setName] = useState("")
    const [stars, setStars] = useState(0)
    const [description, setDescription] = useState("")

    const handleName = (event) => {
        let InputName = event.target.value
        setName(InputName)
    }
    const handleStars = (event) => {
        let InputStars = event.target.value
        setStars(InputStars)
    }
    const handleDescription = (event) => {
        let InputDescription = event.target.value
        setDescription(InputDescription)
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const updateReview = {
                name: name,
                stars: stars,
                description: description
            }

            const response = await axios.put(`${API_URL}/reviews/${params.reviewId}`, updateReview)

            navigate(`/ProductDetall/${params.reviewId}`)
        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        axios.get(`${API_URL}/reviews/${params.reviewId}`)
            .then((response) => {
                setName(response.data.name)
                setStars(response.data.stars)
                setDescription(response.data.description)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [params.reviewId])

    return (
        <div>
            <Navbar />
            <Container>
                <h1>Edit Review</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={handleName} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicStars">
                        <Form.Label>Stars</Form.Label>
                        <Form.Control type="number" value={stars} onChange={handleStars} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={description} onChange={handleDescription} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default EditReview