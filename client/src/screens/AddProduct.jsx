import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const AddProduct = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(true);
  const [image, setImage] = useState("");

  const addProductHandler = async (e) => {
    e.preventDefault();

    const formData = {
      image,
      title,
      price,
      description,
      published,
    };

    await axios.post("/api/products/addProducts", formData);
    navigate("/products");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <img
            style={{ position: "relative", width: 50, height: 50, right: 75 }}
            src="https://etc.usf.edu/presentations/extras/letters/fridge_magnets/green/32/V-300.png"
          ></img>
          <Navbar.Brand href="http://localhost:3000/products">
            VegViews
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:3000/products">
              All Products
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-5 p-2">
        <h1>Add Product</h1>
        <hr />

        <Form
          onSubmit={addProductHandler}
          method="POST"
          encType="multipart/form-data"
        >
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price ($)</Form.Label>
            <Form.Control
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              as="textarea"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="publishedCheckedid">
            <Form.Check
              type="checkbox"
              onChange={(e) => setPublished(e.target.checked)}
              label="publish"
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{
              width: 150,
              height: 40,
              background: "lightgreen",
              color: "black",
              border: 0,
            }}
          >
            Add Product
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddProduct;
