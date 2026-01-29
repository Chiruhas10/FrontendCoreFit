import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

// 🔥 set backend base URL (PORT 4000)
axios.defaults.baseURL = "https://servercorefit.onrender.com";

const ViewCollections = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    _id: '',
    name: '',
    desc: '',
    img: '',
    category: ''
  });

  // ✅ GET ALL PRODUCTS
  useEffect(() => {
    axios.get('/api/products')
      .then((res) => {
        console.log('Admin products:', res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // ✅ GET ONE PRODUCT
  const getOneProduct = (pid) => {
    axios.get(`/api/products/${pid}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  };

  // ✅ DELETE PRODUCT
  const deleteProduct = (pid) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    axios.delete(`/api/products/${pid}`)
      .then(() => {
        alert("Product deleted");

        // 🔥 update UI instantly
        setProducts(products.filter(p => p._id !== pid));
      })
      .catch((err) => {
        console.log(err);
        alert("Delete failed");
      });
  };

  // ✅ INPUT HANDLER
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // ✅ UPDATE PRODUCT
  const updateProduct = (e) => {
    e.preventDefault();

    axios.put(`/api/products/${product._id}`, product)
      .then(() => {
        alert("Product updated");

        setProducts(products.map(p =>
          p._id === product._id ? product : p
        ));
      })
      .catch((err) => {
        console.log(err);
        alert("Update failed");
      });
  };

  return (
    <>
      <div className='container-fluid text-white mb-3'>
        <h5>
          Products: <span style={{ color: 'red' }}>{products.length}</span>
        </h5>
      </div>

      <div className="container row p-5">
        {products.map((item) => (
          <div className='col-lg-4 p-3' key={item._id}>
            <div className='container card h-100 shadow-lg'>
              <div className='card-body row'>
                <div className='col-lg-12'>
                  <img
                    src={item.img}
                    className='img-fluid h-100'
                    alt={item.name}
                  />
                </div>

                <div className='mt-3'>
                  <h5 className='card-title fw-bold fs-7'>{item.name}</h5>
                  <p className='text-muted card-text'>{item.desc}</p>
                </div>
              </div>

              <div className='card-footer'>
                <Link to={`/dashboard/addsize/${item._id}`}>
                  <button className='btn btn-success me-2'>Add Sizes</button>
                </Link>

                <button
                  className='btn btn-warning me-2'
                  data-bs-target='#update'
                  data-bs-toggle='modal'
                  onClick={() => getOneProduct(item._id)}
                >
                  Edit
                </button>

                <button
                  className='btn btn-danger'
                  onClick={() => deleteProduct(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* UPDATE MODAL */}
      <div className='modal fade' id='update'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5>Update Product</h5>
            </div>

            <div className='modal-body'>
              <form onSubmit={updateProduct}>
                <input
                  type='text'
                  name='name'
                  value={product.name}
                  className='form-control mb-3'
                  onChange={handleChange}
                  placeholder='Product Name'
                />

                <textarea
                  className='form-control mb-3'
                  name='desc'
                  value={product.desc}
                  onChange={handleChange}
                  placeholder='Product Description'
                ></textarea>

                <input
                  type='text'
                  name='img'
                  value={product.img}
                  className='form-control mb-3'
                  onChange={handleChange}
                  placeholder='Product Image'
                />

                <input
                  type='text'
                  name='category'
                  value={product.category}
                  className='form-control mb-3'
                  onChange={handleChange}
                  placeholder='Product Category'
                />

                <div className='modal-footer'>
                  <button
                    className='btn btn-success'
                    type='submit'
                    data-bs-dismiss='modal'
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCollections;
