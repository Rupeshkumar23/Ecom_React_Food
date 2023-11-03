/* eslint-disable no-unused-vars */
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "./Imgs/image 110.jpg";
import Img2 from "./Imgs/Img2.jpg";
import Img3 from "./Imgs/Img3.jpg";
import Img4 from "./Imgs/charming-female-blowing-candles-birthday-cake-after-making-her-wish-party 1.jpg";
import Img5 from "./Imgs/happy-man-wife-sunny-day 1.png";
import Img6 from "./Imgs/group-friends-eating-restaurant 1.jpg";
import Img_1 from "./Imgs/kebab-set-table 1.jpg";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { PiBowlFood } from "react-icons/pi";
import { BiDrink } from "react-icons/bi";
import { LuCakeSlice } from "react-icons/lu";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container fluid className="pt-3 pb-5  ">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid rounded img_1"
              src={Img1}
              alt="FirstSlide"
            />
            <Carousel.Caption>
              <h1 className=" Nav_bg1 font_F" data-aos="zoom-in-right">
                Best food for your taste
              </h1>
              <Link className="text-decoration-none" to="/signup">
                <Button
                  className=" Sign_in mb-5 st_k fw-semibold border-0 me-2  px-4 py-3 rounded-5 "
                  data-aos="flip-up"
                >
                  Book A Table
                </Button>
              </Link>
              <Link className="text-decoration-none" to="/signup">
                <Button
                  className=" Sign_in mb-5  fw-semibold border-0  px-4 py-3 rounded-5 "
                  data-aos="flip-up"
                >
                  Explore Menu
                </Button>
              </Link>
              <p className="fs-3 Nav_bg1  font_F " data-aos="zoom-in-left">
                Discover delectable cuisine and unforgettable moments in our
                welcoming, culinary haven.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid rounded img_1"
              src={Img2}
              alt="SecondSlide"
            />
            <Carousel.Caption>
              <h1 className=" Nav_bg1 font_F">Best food for your taste</h1>
              <Link className="text-decoration-none" to="/signup">
                <Button className=" Sign_in mb-5 st_k fw-semibold border-0 me-2 px-4 py-3 rounded-5 ">
                  Book A Table
                </Button>
              </Link>
              <Link className="text-decoration-none" to="/signup">
                <Button className=" Sign_in mb-5  fw-semibold border-0  px-4 py-3 rounded-5 ">
                  Explore Menu
                </Button>
              </Link>
              <p className="fs-3 Nav_bg1  font_F">
                Discover delectable cuisine and unforgettable moments in our
                welcoming, culinary haven.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid rounded img_1 "
              src={Img3}
              alt="ThirdSlide"
            />
            <Carousel.Caption>
              <h1 className=" Nav_bg1 font_F">Best food for your taste</h1>
              <Link className="text-decoration-none" to="/signup">
                <Button className=" Sign_in mb-5 st_k fw-semibold border-0 me-2  px-4 py-3 rounded-5 ">
                  Book A Table
                </Button>
              </Link>
              <Link className="text-decoration-none" to="/signup">
                <Button className=" Sign_in mb-5 fw-semibold border-0  px-4 py-3 rounded-5 ">
                  Explore Menu
                </Button>
              </Link>
              <p className="fs-3 Nav_bg1 font_F">
                Discover delectable cuisine and unforgettable moments in our
                welcoming, culinary haven.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container>
        <h1 className="fs-3 fw-bold bg-dark text-white text-uppercase text-center mt-2">
          We also offer unique services for your events
        </h1>
        <div className=" py-5">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
              <div
                className="card shadow-sm d-flex flex-column"
                data-aos="flip-right"
              >
                <div className="col">
                  <img
                    src={Img_1}
                    alt="India"
                    width="100%"
                    height="200"
                    className="img-fluid"
                  />

                  <div className="card-body d-flex flex-column">
                    <h3>Caterings</h3>
                    <p className="card-text">
                      Indulge in our exquisite catering services. From intimate
                      gatherings to grand events, we bring culinary delight to
                      your celebrations.
                    </p>
                    <div className="d-flex justify-content-between align-items-center"></div>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="flip-right">
                <div className="card shadow-sm  d-flex flex-column">
                  <div className="col">
                    <img
                      src={Img4}
                      alt="London"
                      width="100%"
                      height="200"
                      className="img-fluid"
                    />

                    <div className="card-body d-flex flex-column">
                      <h3>Birthdays</h3>
                      <p className="card-text">
                        Celebrate life's milestones with our delectable birthday
                        treats. From cakes to finger foods, make every birthday
                        memorable with Bistro Bliss.
                      </p>
                      <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="flip-right">
                <div className="card shadow-sm  d-flex flex-column">
                  <div className="col">
                    <img
                      src={Img5}
                      alt="New york"
                      width="100%"
                      height="200"
                      className="img-fluid"
                    />

                    <div className="card-body d-flex flex-column">
                      <h3>Weddings</h3>
                      <p className="card-text">
                        Elevate your special day with our gourmet wedding
                        catering. We create an unforgettable dining experience
                        for your journey of love.
                      </p>
                      <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col" data-aos="flip-right">
                <div className="card shadow-sm  d-flex flex-column">
                  <div className="col">
                    <img
                      src={Img6}
                      alt="China"
                      width="100%"
                      height="200"
                      className="img-fluid"
                    />

                    <div className="card-body d-flex flex-column">
                      <h3>Events</h3>
                      <p className="card-text">
                        Turn your events into culinary masterpieces with our
                        diverse menu options. Bistro Bliss adds flavor to your
                        gatherings, big or small.
                      </p>
                      <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <section id="services" className="mt-5">
          <h1 className="fs-3 fw-bold bg-dark text-white text-uppercase text-center mt-2">
            Browse Our Menu
          </h1>
          <div className="container-fluid d-flex flex-wrap justify-content-center my-5">
            <div
              className="card mx-3 my-3 rounded-5 font_C col-12 col-md-6 col-lg-4"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <MdOutlineFreeBreakfast
                size={48}
                color="#474747"
                className="text-center font_C w-100"
              />

              <div className="card-body">
                <h3 className="fs-4 fw-bold text-center text-uppercase">
                  Breakfast
                </h3>
                <p className="card-text text-center">
                  Start your day right with our delicious breakfast options,
                  from fluffy pancakes to hearty omelets and fresh fruit bowls.
                </p>
              </div>
            </div>
            <div
              className="card mx-3 my-3 rounded-5 font_C col-12 col-md-6 col-lg-4"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <PiBowlFood
                size={48}
                color="#474747"
                className="text-center font_C w-100"
              />
              <div className="card-body">
                <h3 className="fs-4 fw-bold text-center text-uppercase">
                  Main Dishes
                </h3>
                <p className="card-text text-center">
                  Explore our savory main dishes, featuring a variety of flavors
                  and ingredients that will satisfy your cravings.
                </p>
              </div>
            </div>
            <div
              className="card mx-3 my-3 rounded-5 font_C col-12 col-md-6 col-lg-4"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <BiDrink
                size={48}
                color="#474747"
                className="text-center font_C w-100"
              />
              <div className="card-body">
                <h3 className="fs-4 fw-bold text-center text-uppercase">
                  Drinks
                </h3>
                <p className="card-text text-center">
                  Quench your thirst with our refreshing drink selection,
                  including smoothies, cocktails, and specialty beverages.
                </p>
              </div>
            </div>
            <div
              className="card mx-3 my-3 rounded-5 font_C col-12 col-md-6 col-lg-4"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <LuCakeSlice
                size={48}
                color="#474747"
                className="text-center font_C w-100"
              />
              <div className="card-body">
                <h3 className="fs-4 fw-bold text-center text-uppercase">
                  Desserts
                </h3>
                <p className="card-text text-center">
                  Indulge in our delectable desserts, featuring mouthwatering
                  cakes, pastries, and sweet treats to satisfy your sweet tooth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Home;
