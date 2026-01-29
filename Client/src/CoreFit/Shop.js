import { useEffect, useState } from "react";
import { Link } from "react-router";
import BG1 from "./assets/BG1.jpeg";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  // Fetch products
  useEffect(() => {
    fetch("https://servercorefit.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Products from backend:", data);
        setProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredProducts =
    category === ""
      ? products
      : products.filter((item) => item.category === category);

  return (
    <div>
      {/* Banner */}
      <div
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${BG1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
        }}
      >
        <h1 className="fw-bold">Shop Activewear</h1>
      </div>

      {/* Filter */}
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <select
            className="form-select w-auto"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="row">
          {filteredProducts.map((item) => (
            <div className="col-md-3 mb-4" key={item._id}>
              <div className="card shadow-sm h-100">
                <img
                  src={item.img}
                  className="card-img-top product-img"
                  alt={item.name}
                />

                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title product-title">
                    {item.name}
                  </h5>

                  <p className="fw-bold mt-2">₹{item.price}</p>

                  <Link
                    to={`/product/${item._id}`}
                    className="btn btn-dark btn-sm mt-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <p className="text-center">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
