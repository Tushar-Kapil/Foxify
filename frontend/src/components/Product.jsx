/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import "./product.css";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded shadow-md p-3 mb-5 bg-white rounded card-hover card">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
          <Card.Title as="div">
            <strong className="product-title">{product.name}</strong>
          </Card.Title>
          <Card.Title as="div">
            <p className="product-category">{product.category}</p>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3" style={{ marginTop: "5px", fontSize: "20px" }}>
          MRP: ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
