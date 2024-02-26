import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from 'react-bootstrap/InputGroup';
import FormCheckLabel from 'react-bootstrap/FormCheckLabel'

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("url");
  const [checkboxes, setCheckboxes] = useState({
    nuevo: false,
    usado: false,
  })
//   const [selectedState, setSelectedState] = useState(false);
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

//   const handleSelectedState = () => {
//     let selectedValue = event.target.value;
//     console.log(selectedValue);
//     //setSelectedState(selectedValue);
//   };

 const handleCheckboxChange = (checkboxName) => {
     setCheckboxes((preventCheckBoxes) => ({
         ...preventCheckBoxes,
         [checkboxName]: !preventCheckBoxes[checkboxName],
     }));
 }

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
        nuevo: nuevo,
        usado: usado,
        // selectedState: selectedState,
        keyWords: keyWords,
        category: category,
      };
      const response = await axios.post(`${API_URL}/projects`, newProject);
    } catch (error) {
      console.log(error);
    }
  };

  //   setName("");
  //   setPrice(0);
  //   setDescription("");
  //   setImg("url");
  //   setState("");
  //   setKeyWords("");
  //   setCategory("");

  return (
    <div>
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
          <Form.Control type="text" value={keyWords} onChange={setKeyWords} />
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

        {/* <InputGroup className="mb-3"> 
        <FloatingLabel
          controlId="floatingInput"
          label="Nuevo"
          className="mb-3"
        /> 
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
         
        <FloatingLabel
          controlId="floatingInput"
          label="Usado"
          className="mb-3"
        /> 
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        </InputGroup> */}

        <InputGroup className="mb-3 container"> 
        <Form.Check
            type="checkbox"
            label="Nuevo"
            checked={checkboxes.nuevo}
            onChange={() => handleCheckboxChange('nuevo')}
            />
            <Form.Check
            type="checkbox"
            label="Usado"
            checked={checkboxes.usado}
            onChange={() => handleCheckboxChange('usado')}

            />
        </InputGroup>
        
        
   

        {/* <Form.Select
          aria-label="State"
          name="selectedState"
          onChange={handleSelectedState}
          value={setSelectedState}
        >
          <option>-- None --</option>
          <option value="nuevo">Nuevo</option>
          <option value="usado">Usado</option>
        </Form.Select> */}

        <div>
          <Button variant="outline-secondary" size="lg" type="submit">
            Añadir
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddProduct;
