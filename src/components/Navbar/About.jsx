import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Video1 from "../Navbar/Videos/Video1.mp4";

const About = () => {
  return (
    <div className="top_1">
      <main>
        <section className="py-5 text-center container">
          <div
            className="row py-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="col-12">
              <h1 className="fs-3 fw-bold bg-dark text-white text-uppercase text-center mt-2">
                About Us
              </h1>
              <p className="fw-bold fs-1 text-white text-center">
                Indulge in the culinary wonders of Bistro Bliss. We take you on
                a delectable journey, exploring a world of flavors, from
                mouthwatering classics to unique delicacies, all in one place.
              </p>
              <p>
                <Link to="/">
                  <Button className=" border-0 Sign_in w-100 fw-semibold py-3">
                    Go Back To Home Page
                  </Button>
                </Link>
              </p>
            </div>
          </div>
          <div
            className="container"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <div className="row">
              <div className="col">
                <video className="w-100" autoPlay loop muted>
                  <source src={Video1} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
