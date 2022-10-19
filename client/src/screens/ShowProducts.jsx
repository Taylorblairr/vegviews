import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsData = async () => {
      const { data } = await axios.get("./api/products/allProducts");
      console.log(data);
      setProducts(data);
    };
    getProductsData();
  }, []);

  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <img
            style={{ position: "relative", width: 50, height: 50, right: 75 }}
            src="https://etc.usf.edu/presentations/extras/letters/fridge_magnets/green/32/V-300.png"
            alt="Logo"
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

      <Container className="justify-content-center p-2">
        <h1 style={{ color: "#118811" }}>Products</h1>
        <hr />

        <Row>
          {products.map((product) => {
            return (
              <Col
                style={{ color: "darkgreen" }}
                md={6}
                lg={4}
                sm={12}
                key={product.id}
              >
                <ProductCard product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ShowProducts;
