import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Row,
  Col,
} from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "hooks/useProduct";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let data = useProduct(id);
  let product = data.product;
  const [user] = useAuthState(auth);
  const handleCart = () => {
    if (!user) {
      navigate("/signin");
      alert("You need to login first.");
    } else {
      navigate("/cart");
    }
  };

  return (
    <>
      <Header />
      <div className="container-detail">
        <div className="content-detail">
          <Row>
            <Col sm="6">
              <div className="product-card">
                <Card
                  style={{
                    marginTop: "15rem",
                    marginLeft: "10rem",
                    width: "45rem",
                    height: "40rem",
                  }}
                >
                  <img alt="Sample" src={`/${product.thumbnails}`} />
                  <CardBody>
                    <CardTitle tag="h3">{product.name}</CardTitle>
                    <CardText>{product.desc}</CardText>
                    <Button onClick={handleCart} style={{ cursor: "pointer" }}>
                      Add to Cart
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col sm="6">
              <div className="product-card">
                <Card
                  style={{
                    marginTop: "15rem",
                    width: "50rem",
                    height: "40rem",
                  }}
                >
                  <CardTitle  style={{
                    textAlign: "center",
                    marginTop: "2.5rem",
                    marginBottom: "2.5rem",
                  }} tag="h1">{product.name}</CardTitle>
                  <CardText style={{
                    textAlign: "justify",
                    marginLeft: "1rem",
                   }} tag="h3">Description</CardText>
                  <CardText
                  style={{
                    textAlign: "justify",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                   }}>{product.fullDesc}</CardText>
                   <CardText style={{
                    textAlign: "justify",
                    marginLeft: "1rem",
                   }} tag="h3">Price</CardText>
                  <CardText
                  style={{
                    textAlign: "justify",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                   }}>Rp {product.price}</CardText>
                   <CardText style={{
                    textAlign: "justify",
                    marginLeft: "1rem",
                   }} tag="h3">Discount</CardText>
                  <CardText
                  style={{
                    textAlign: "justify",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                   }}>{product.discount}</CardText>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
