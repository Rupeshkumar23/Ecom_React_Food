import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <section className="mt-5">
          <div className="row text-center d-flex justify-content-center pt-5">
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/about" className="text-white">
                  About us
                </Link>
              </h6>
            </div>

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/tour" className="text-white">
                  Menu
                </Link>
              </h6>
            </div>

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/Events" className="text-white">
                  Seasons & Events
                </Link>
              </h6>
            </div>

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/help" className="text-white">
                  Help
                </Link>
              </h6>
            </div>

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/contact" className="text-white">
                  Contact
                </Link>
              </h6>
            </div>
          </div>
        </section>

        <hr className="my-5" />

        <section className="mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <p className="text-center">
                Indulge in the culinary wonders of Bistro Bliss. We take you on
                a delectable journey, exploring a world of flavors, from
                mouthwatering classics to unique delicacies, all in one place.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mb-5 cursor-pointer">
          <a
            href="https://www.instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="fs-3 me-3" style={{ color: "#AD343E" }} />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="fs-3 me-3" style={{ color: "#AD343E" }} />
          </a>
          <a
            href="https://www.facebook.com/your-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="fs-3" style={{ color: "#AD343E" }} />
          </a>
        </section>
      </Container>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <Link to="/" className="text-white text-decoration-none">
          <span className="fw-bold me-5">Bistro Bliss</span>
        </Link>
        &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
