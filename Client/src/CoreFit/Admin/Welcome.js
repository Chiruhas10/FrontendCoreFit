import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://servercorefit.onrender.com";

const Welcome = () => {
  const [productCount, setProductCount] = useState(0);
  const [enquiryCount, setEnquiryCount] = useState(0);

  useEffect(() => {
    axios.get("/api/products")
      .then((res) => setProductCount(res.data.length))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios.get("/api/enquiries")
      .then((res) => setEnquiryCount(res.data.length))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className="text-white text-center d-flex flex-column justify-content-center"
      style={{ minHeight: "75vh" }}   // 🔥 control height
    >
      <h1 className="fw-bold mb-2">Welcome to CoreFit</h1>
      <p className="mb-4">
        Your one-stop destination for premium fitness wear.
      </p>

      <div className="row g-4 justify-content-center">
        {/* PRODUCTS */}
        <div className="col-md-3">
          <div className="bg-white text-dark p-4 rounded text-center shadow">
            <h2 className="fw-bold mb-1">{productCount}+</h2>
            <p className="mb-0">Products</p>
          </div>
        </div>

        {/* ENQUIRIES */}
        <div className="col-md-3">
          <div className="bg-white text-dark p-4 rounded text-center shadow">
            <h2 className="fw-bold mb-1">{enquiryCount}+</h2>
            <p className="mb-0">Enquiries</p>
          </div>
        </div>

        {/* REVIEWS */}
        <div className="col-md-3">
          <div className="bg-white text-dark p-4 rounded text-center shadow">
            <h2 className="fw-bold mb-1">0</h2>
            <p className="mb-0">Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
