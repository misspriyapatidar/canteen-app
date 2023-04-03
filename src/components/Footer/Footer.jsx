import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Mini Canteen</h5>
              <p>
                Tasty Treat refers to a brand of food products that are known for their delicious taste and high quality. The brand offers a wide range of snacks, desserts, and other food items that are made with premium ingredients and are carefully crafted to provide a satisfying eating experience. Tasty Treat products are a popular choice for those who value great taste and quality in their food.
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Monday - Friday</span>
                <p>10:00am - 03:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Saturday - Sunday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: St. Paul Institute of Professional Studies Indore, Lalaram Nagar, Indore, Madhya Pradesh</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: +91 731 2499911, 2490114</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: info@spipsindore.ac.in</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line" style={{ objectFit: "cover" }}></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">

          </Col>
          <Col lg="6" md="6">

          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
