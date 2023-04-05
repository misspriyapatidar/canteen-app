import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/canteen.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import foodCategoryImg04 from "../assets/images/cold drinks.png.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/canteen3.png";

import networkImg from "../assets/images/canteen2.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";


const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Quick delivery refers to a fast and efficient process of delivering goods or services to customers. It typically involves the use of streamlined logistics systems and transportation methods to ensure that products are delivered promptly and on time. Quick delivery is essential for customer satisfaction and is a key factor in the success of many businesses that rely on timely delivery of their products or services.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Super Dine In is a term used to describe a dining experience that offers exceptional food and service in a comfortable and inviting atmosphere. It typically refers to restaurants or eateries that provide an outstanding selection of high-quality dishes and beverages, often with a focus on using fresh, locally-sourced ingredients. Super Dine In establishments aim to create an enjoyable and memorable dining experience for their customers.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Easy Pick Up refers to a convenient and hassle-free method of acquiring products or services. It typically involves placing an order online or over the phone and picking up the item(s) at a designated location, such as a store or restaurant. Easy Pick Up offers customers a quick and efficient way to obtain what they need without the inconvenience of waiting in line or dealing with delivery times.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Cold Drinks") {
      const filteredProducts = products.filter(
        (item) => item.category === "Cold Drinks"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Fast Food") {
      const filteredProducts = products.filter(
        (item) => item.category === "Fast Food"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Cold Drinks") {
      const filteredProducts = products.filter(
        (item) => item.category === "Cold Drinks"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Easy way to satisfy hunger</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your Canteen</span>
                </h1>

                <p>
                  Tasty food is a type of cuisine that is delicious and enjoyable to eat. It often consists of dishes that are full of flavor and have a pleasant texture. The taste of the food can be influenced by many factors, including the ingredients used, the cooking method, and the seasonings added to the dish.


                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" style={{
                  height: "550px", objectFit: "cover",
                }} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at Canteen</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${category === "ALL" ? "foodBtnActive" : ""
                    } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${category === "BURGER" ? "foodBtnActive" : ""
                    } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${category === "PIZZA" ? "foodBtnActive" : ""
                    } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${category === "Fast Food" ? "foodBtnActive" : ""
                    } `}
                  onClick={() => setCategory("Fast Food")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Fast Food
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${category === "Cold Drinks" ? "foodBtnActive" : ""
                    } `}
                  onClick={() => setCategory("Cold Drinks")}
                >
                  <img src={foodCategoryImg04} alt="" />
                  Cold Drinks
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" style={{ height: "855px", objectFit: "cover" }} />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Tasty Treat?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Tasty Treat refers to a brand of food products that are known for their delicious taste and high quality. The brand offers a wide range of snacks, desserts, and other food items that are made with premium ingredients and are carefully crafted to provide a satisfying eating experience. Tasty Treat products are a popular choice for those who value great taste and quality in their food.
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                      foods
                    </p>
                    <p className="choose__us-desc">
                      Fresh and tasty foods refer to dishes made with high-quality, fresh ingredients that are delicious and enjoyable to eat. These foods are typically prepared with minimal processing and are free from preservatives and additives, which enhances the flavor and nutritional value of the dish. Fresh and tasty foods are popular among those who value healthy and flavorful meals.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                      Quality support refers to the level of assistance and guidance provided to customers by a business or organization. It involves ensuring that customers receive prompt, knowledgeable, and helpful assistance when they have questions, concerns, or issues. Quality support can help build customer loyalty and trust, as well as improve the overall customer experience.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Order from any
                      location{" "}
                    </p>
                    <p className="choose__us-desc">
                      Order from any location" means that you can place an order for a product or service from anywhere, as long as you have access to the necessary technology and resources. This concept is increasingly popular with the rise of e-commerce and mobile technology, allowing customers to make purchases online or via mobile devices without the need to physically visit a store or location.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Customers saying good things about our food is a positive feedback that highlights the quality and taste of our cuisine. It indicates that our customers are satisfied with their dining experience and appreciate the effort we put into providing them with delicious food. Positive feedback can help to build a loyal customer base and attract new customers to our business.
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" style={{ objectFit: "cover", height: "550px" }} />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet >
  );
};

export default Home;
