import React from "react";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/Burger.png.jpg";
import categoryImg02 from "../../../assets/images/pizza-png-19321.png";
import categoryImg03 from "../../../assets/images/Chips.png";
import categoryImg04 from "../../../assets/images/cold drinks.png.png";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "Burger",
    imgUrl: categoryImg01,
  },
  {
    display: "Pizza",
    imgUrl: categoryImg02,
  },
  {
    display: "Fast Food",
    imgUrl: categoryImg03,
  },
  {
    display: "Cold Drinks",
    imgUrl: categoryImg04,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" style={{ width: "50px", height: '50px', borderRadius: "50%", objectFit: 'cover' }} />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
