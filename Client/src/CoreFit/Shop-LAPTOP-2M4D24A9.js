
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router'

const Shop = ()=>{
  const [ products, setProducts ] = useState([])
  const [ category, setCategory ] = useState('')
  useEffect(()=>{
    axios.get(`http://localhost:5000/products`)
    .then((res)=>{
      if( category === ''){
        setProducts(res.data)
      }
      else{
        const result = res.data.filter((p) => p.category ===category)
        setProducts(result)
      }
    })
    .catch((err)=>console.log(err))
  })
  const ChangeCategory = (e) => {
    setCategory(e.target.value)
  }
  return (
      <div className="container my-5">
        <div className="d-flex justify-content-between align-products-center mb-4">
          <div className='col-md-6 col-lg-4  mx-auto my-3'>
            <select className="form-select" onChange={ChangeCategory}>
              <option value=" ">All</option>
              <option value="t-shirts">T-Shirts</option>
              <option value="trousers">Trousers</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-3 col-sm-6 mb-4" key={product.id}>
              <div className="card shadow-sm h-100">
                <img src={product.img} className="card-img-top" alt={product.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-success fw-bold animate__animated animate__flash animate__infinite">
                    ₹{product.price} - <del className='text-dark'>{product.price * 1.5}</del>
                  </p>
                  <Link to={`/productDetails/${product.id}`}>
                  <button className="btn btn-dark btn-sm">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
  )
}

export default Shop;
