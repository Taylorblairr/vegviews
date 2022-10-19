import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <Card className="m-2 p-3 rounded" style={{ height: 250 }}>
        <Card.Body>
          <Card.Title>{product.title.slice(0, 64)}...</Card.Title>
          <Card.Title>${product.price}</Card.Title>
          <Card.Text>{product.description.slice(0, 110)}...</Card.Text>

          <Link to={`./${product.id}`}>
            <Button
              variant="primary"
              type="submit"
              style={{
                position: "absolute",
                width: 80,
                height: 30,
                right: 75,
                left: 30,
                background: "lightgreen",
                color: "black",
                border: 0,
              }}
            >
              Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
