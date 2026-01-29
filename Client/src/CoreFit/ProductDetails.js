import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import SendEnquiry from './SendEnquiry';

axios.defaults.baseURL = "https://servercorefit.onrender.com";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then((res) => {
        console.log("Single product from backend:", res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!product) {
    return <p className="text-center mt-5">Loading product...</p>;
  }

  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-lg-6'>
          <h1 className='fw-bold m-3'>{product.name}</h1>
          <p className='lead fw-normal p-3'>{product.desc}</p>

          <button className="btn btn-success mb-3">
            Get it for{" "}
            <span className='fw-bold'>₹{product.price}</span>{" "}
            - <del className='text-dark fw-bold'>₹{product.price * 1.5}</del>
          </button>

          <button className='btn form-control mt-2 btn-warning'>
            Add to cart
          </button>

          <button className='btn form-control mt-2 btn-warning'>
            Buy Now
          </button>

          <h2 className='p-3 mt-3'>Interested ? Buy Now!</h2>
          <SendEnquiry />
        </div>

        <div className='col-lg-6'>
          <img src={product.img} alt={product.name} className='img-fluid' />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
