import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

// backend base URL
axios.defaults.baseURL = "https://servercorefit.onrender.com";

const AddSize = () => {
  const [size, setSize] = useState([]);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  // ✅ GET PRODUCT BY ID
  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setSize(res.data.size || []); // preload existing sizes
      })
      .catch((err) => console.log(err));
  }, [id]);

  // ✅ HANDLE CHECKBOX CHANGE
  const ChangeSize = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSize((prev) => [...prev, value]);
    } else {
      setSize((prev) => prev.filter((s) => s !== value));
    }
  };

  // ✅ SUBMIT SIZES
  const submitHandler = (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...product,
      size
    };

    axios.put(`/api/products/${id}`, updatedProduct)
      .then(() => {
        alert('Sizes updated successfully');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='container p-5 text-white'>
      <h4 className='mb-3'>Select Available Sizes</h4>

      <form onSubmit={submitHandler}>
        {["S", "M", "L", "XL", "XXL"].map((s) => (
          <div className='form-check' key={s}>
            <input
              type="checkbox"
              value={s}
              className="form-check-input"
              checked={size.includes(s)}
              onChange={ChangeSize}
            />
            <label className="form-check-label">{s}</label>
          </div>
        ))}

        <button className='btn btn-primary m-3'>Submit</button>
      </form>
    </div>
  );
};

export default AddSize;
