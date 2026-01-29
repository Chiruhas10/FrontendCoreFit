import React from "react";
import BG2 from "./assets/BG2.jpg"; 
import BG5 from './assets/BG5.webp'
import { Link } from "react-router";

const About = () => {
  return (
    <div className="text-bg-dark">
      {/* Hero Banner */}
      <div
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${BG2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
        }}
      >
        <h1 className="fw-bold display-4">About CoreFit</h1>
      </div>

      {/* Brand Story */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <img
              src={BG5}
              alt="About CoreFit"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="display-5 fw-bold mb-3">Our Story</h2>
            <p className="lead fw-normal">
              CoreFit started with a simple vision: to combine **performance,
              comfort, and style** in activewear. We empower athletes and fitness
              enthusiasts to push their limits and look good doing it. Every
              stitch, every fabric, and every design is crafted to support your
              journey.
            </p>
            <p className="lead fw-normal">
              Fitness is not just a lifestyle—it’s a mindset. CoreFit is here to
              make sure your gear matches your determination.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Cards */}
      <div className="container my-5">
        <h2 className="display-5 text-center fw-bold mb-4">Our Mission & Vision</h2>
        <div className="row text-center">
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm p-4">
              <h4 className="display-6 fw-semibold">Mission</h4>
              <p className="lead fw-normal">
                Create high-performance activewear that blends **style,
                durability, and functionality**, so you can focus on crushing
                your workouts.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm p-4">
              <h4 className="display-6 fw-semibold">Vision</h4>
              <p className="lead fw-normal">
                To become the **go-to fitness apparel brand** globally,
                uniting people through movement, passion, and performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div
        className="text-white text-center py-5"
        
      >
        <h2 className="fw-bold mb-3">Join the CoreFit Community</h2>
        <p className="mb-4">
          CoreFit is more than clothing—it’s a community of people pushing
          limits and inspiring each other. Be part of the movement.
        </p>
        <Link to="/collections"><button className="btn btn-success btn-lg">Explore Collections</button></Link>
        <hr className="border-light" />
      </div>
    </div>
  );
};

export default About;
