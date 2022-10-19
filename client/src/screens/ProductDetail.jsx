import React, { useEffect, useState } from "react";
import { Card, Button, Container, Form, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [published, setPublished] = useState(true);
  const [productImage, setProductImage] = useState("");

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    console.log("getting product");
    const getSingleProductData = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      console.log(data);

      setTitle(data.title);
      setPrice(data.price);
      setProductDescription(data.description);
      setPublished(data.published);
      setProductImage(data.image);

      setReviews(data.review);
    };
    getSingleProductData();
  }, [id]);

  const handleDelete = async (id) => {
    await axios.delete(`/api/products/${id}`);
    navigate("/products");
  };

  const addReviewHandler = async (e) => {
    e.preventDefault();

    let review = {
      product_id: id,
      rating: rating,
      description: description,
    };

    const { data } = await axios.post(`/api/products/addReview/${id}`, review);
    setReviews(data);
  };

  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <img
            style={{ position: "relative", width: 50, height: 50, right: 75 }}
            src="https://etc.usf.edu/presentations/extras/letters/fridge_magnets/green/32/V-300.png"
          ></img>
          <Navbar.Brand href="http://localhost:3000/products">
            VegViews
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:3000/addProduct">
              Add New Products
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Container className="mt-10 p-4">
        <h1 className="text-center">Product Details And Reviews</h1>
        <hr />

        <Row>
          <Col md={8} lg={8} sm={8}>
            <Card className="m-3 p-2 rounded">
              <Card.Body>
                <Card.Title>Title: {title}</Card.Title>
                <Card.Title className="text-success">
                  Price: ${price}
                </Card.Title>
                <Card.Text>Description: {productDescription}</Card.Text>
                <Card.Text></Card.Text>
                <br />

                <Link to={`/products/edit/${id}`}>
                  <Button>Edit</Button>
                </Link>

                <Button
                  className="btn btn-danger m-2"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} lg={4} sm={4}>
            <h2 className="text-center">Reviews</h2>
            <hr />

            <Form onSubmit={addReviewHandler}>
              <Form.Group className="mb-3" controlId="rating">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
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
                Add Review
              </Button>
            </Form>

            <br />

            <h5>Product Reviews</h5>
            <hr />

            {reviews?.length > 0 ? (
              reviews.map((review) => {
                return (
                  <p style={{ fontSize: 20 }} key={review.id}>
                    Rating: {review.rating} <br /> {review.description}
                  </p>
                );
              })
            ) : (
              <p> No reviews for this product </p>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
