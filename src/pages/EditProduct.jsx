import React, { useState, useEffect } from "react";
import {
  Form,
  FloatingLabel,
  Button,
  InputGroup,
  Container,
} from "react-bootstrap";
import axios from "axios";
import API_URL from "../utils/api";
import { useNavigate, useParams, Link } from "react-router-dom";

const categories = ["ropa", "tecnologia", "vehiculos", "casa"];

function EditProduct(props) {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState({});

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

  useEffect(() => {
    axios
      .get(`${API_URL}/products/${productId}`)
      .then((response) => {
        const productData = response.data;
        setName(productData.name);
        setPrice(productData.price);
        setDescription(productData.description);
        setImg(productData.image);
        setCheckboxes({
          nuevo: productData.nuevo,
          usado: productData.usado,
        });
        setKeyWords(productData.keyWords);
        setCategory(productData.category);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  const handleFormSubmit = async (e) => {
    e.preventDefault(); //logica del editar

    try {
      const response = await axios.put(`${API_URL}/products/${productId}`, {
        name: name,
        price: price,
        description: description,
        image: img,
        nuevo: checkboxes.nuevo,
        usado: checkboxes.usado,
        keyWords: keyWords,
        category: category,
      });
      console.log(response);

      navigate(`/ProductDetall/${productId}`);
    } catch (error) {
      console.log(error);
      navigate("/error")
    }
  };
  return (
    <Container>
      <div>
        <h1>EditProduct</h1>
        <Form onSubmit={handleFormSubmit}>
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
            <Form.Select value={category} onChange={handleCategory}>
              <option value="">Selecciona una categoría</option>
              {categories.map((categorias) => (
                <option key={categorias} value={categorias}>
                  {categorias}
                </option>
              ))}
            </Form.Select>
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
          <Container className="d-flex justify-content-between">
            <Button variant="outline-secondary" size="lg" type="submit">
              EditProduct
            </Button>
            <Link variant="outline-secondary" to={`/`}>
              <Button variant="outline-primary" size="lg" type="submit">
                Back
              </Button>
            </Link>
          </Container>
        </Form>
      </div>
    </Container>
  );
}

export default EditProduct;
