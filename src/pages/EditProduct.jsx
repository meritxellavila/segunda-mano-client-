import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function EditProduct(props) {
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

  return (
    <div>EditProduct</div>
  )
}

export default EditProduct