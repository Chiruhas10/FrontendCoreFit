import React, { use } from "react";
import BG5 from './assets/BG5.webp'
import axios from "axios";
const Collections = () => {
 const [collections, setCollections] = React.useState([]);
 React.useEffect(() => {
  axios.get(`http://localhost:5000/products`)
    .then((res) => {
      setCollections(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

  return (
    <div className="text-bg-dark border-none">
      {/* Hero Banner */}
      <div
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${BG5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
        }}
      >
        <h1 className="display-2 fw-bold">Our Collections</h1>
      </div>

      {/* Collections Grid */}
      <div className="container my-5">
        <div className="row">
          {collections.map((col, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card text-white">
                <img
                  src={col.img}
                  className="card-img"
                  alt={col.title}
                  style={{ height: "350px", objectFit: "cover" }}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end p-4"
                  style={{ background: "rgba(0,0,0,0.3)" }}>
                  <h3 className="fw-bold">{col.title}</h3>
                  <p>{col.desc}</p>
                  <button className="btn btn-light btn-sm w-50">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center p-3">
        <h2>Find Your Perfect Fit</h2>
        <p className="fs-5">From training to lifestyle, we’ve got you covered.</p>
        <button className="btn Slidebutton btn-lg">Shop All Products</button>
        <hr className="border-light" />
      </div>
      
    </div>
  );
};

export default Collections;
