import React from "react";
import { useState } from "react";
import axios from "axios";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from "react-bootstrap/InputGroup";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("url");
  const [checkboxes, setCheckboxes] = useState({
    nuevo: false,
    usado: false,
  });
  const [keyWords, setKeyWords] = useState("");
  const [category, setCategory] = useState("");

  const handleName = (event) => {
    let inputName = event.target.value;
    console.log(inputName);
    setName(inputName);
  };

  const handlePrice = (event) => {
    let inputPrice = event.target.value;
    console.log(price);
    setPrice(inputPrice);
  };

  const handleDescription = (event) => {
    let inputDescription = event.target.value;
    setDescription(inputDescription);
  };

  const handleImg = (event) => {
    let inputImg = event.target.value;
    setImg(inputImg);
  };

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((preventCheckBoxes) => ({
      ...preventCheckBoxes,
      [checkboxName]: !preventCheckBoxes[checkboxName],
    }));
  };

  const handleKeyWords = (event) => {
    let inputValue = event.target.value;
    setKeyWords(inputValue);
  };

  const handleCategory = (event) => {
    let inputValue = event.target.value;
    setCategory(inputValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newProduct = {
        name: name,
        price: price,
        description: description,
        image: img,
        nuevo: checkboxes.nuevo,
        usado: checkboxes.usado,
        keyWords: keyWords,
        category: category,
      };
      const response = await axios.post(
        `http://localhost:5005/products`,
        newProduct
      );
      console.log(response);
     

      setName("");
      setPrice(0);
      setDescription("");
      setImg("url");
      setCheckboxes({
        nuevo: false,
        usado: false,
      });
      setKeyWords("");
      setCategory("");
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <h1>Añadir nuevo Producto</h1>

        <Form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Nombre:"
            className="mb-3"
          >
            <Form.Control type="text" value={name} onChange={handleName} />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Price:"
            className="mb-3"
          >
            <Form.Control type="number" value={price} onChange={handlePrice} />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Description:"
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={description}
              onChange={handleDescription}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="URL Img:"
            className="mb-3"
          >
            <Form.Control type="text" value={img} onChange={handleImg} />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="KeyWords:"
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={keyWords}
              onChange={handleKeyWords}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Category:"
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={category}
              onChange={handleCategory}
            />
          </FloatingLabel>

          <InputGroup className="mb-3 container">
            <Form.Check
              type="checkbox"
              label="Nuevo"
              checked={checkboxes.nuevo}
              onChange={() => handleCheckboxChange("nuevo")}
              disabled={checkboxes.usado}
              className="me-3" 
            />
            <Form.Check
              type="checkbox"
              label="Usado"
              checked={checkboxes.usado}
              onChange={() => handleCheckboxChange("usado")}
              disabled={checkboxes.nuevo}
            />
          </InputGroup>

          <Button variant="outline-secondary" size="lg" type="submit">
            Añadir
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default AddProduct;
