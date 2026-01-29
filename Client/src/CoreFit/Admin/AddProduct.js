import { useState } from 'react';
import axios from 'axios';


axios.defaults.baseURL = "https://servercorefit.onrender.com";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    desc: '',
    img: '',
    price: '',
    category: ''
  });

  const updateProduct = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post('https://servercorefit.onrender.com/api/products', {
      ...product,
      price: Number(product.price)
    })
      .then(() => {
        alert('New Product added successfully');
        setProduct({
          name: '',
          desc: '',
          img: '',
          price: '',
          category: ''
        });
      })
      .catch(err => {
        console.error(err.response?.data || err);
        alert('Failed to add product');
      });

  };

  return (
    <div className='container p-5'>
      <div className='col-lg-6 shadow-lg mx-auto p-5'>
        <h1 className='text-center mb-5 text-white'>Add Product</h1>

        <form onSubmit={submitHandler}>
          <input
            type='text'
            name='name'
            value={product.name}
            className='form-control mb-3'
            onChange={updateProduct}
            placeholder='Product Name'
            required
          />

          <textarea
            className='form-control mb-3'
            name='desc'
            value={product.desc}
            onChange={updateProduct}
            placeholder='Product Description'
          />

          <input
            type='text'
            name='img'
            value={product.img}
            className='form-control mb-3'
            onChange={updateProduct}
            placeholder='Product Image URL'
          />

          <input
            type='text'
            name='category'
            value={product.category}
            className='form-control mb-3'
            onChange={updateProduct}
            placeholder='Product Category (Men / Women / Accessories)'
          />

          <input
            type='number'
            name='price'
            value={product.price}
            className='form-control mb-3'
            onChange={updateProduct}
            placeholder='Product Price'
            required
          />

          <button className='btn btn-primary w-100'>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
