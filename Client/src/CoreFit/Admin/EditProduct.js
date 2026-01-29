import axios from 'axios'
import React,{useState, useEffect} from 'react'

const EditProduct = (pid) => {
    const[product, setProduct] = useState({name:'', desc:'', img:''})

    useEffect(()=>
    axios.get(`https://servercorefit.onrender.com/products/${pid}`)
    .then(()=> setProduct({name:'', desc:'', img:''}))
    .catch((err)=>console.log(err))
    )
    const EditProduct = (e)=>{
        const[name, value] = e.target
        // console.log(name, value)
        setProduct(prevProduct => ({...prevProduct, [name]:value}))
    }
    const submitHandler = (e)=>{
        e.preventDefault()
        axios.put(`https://servercorefit.onrender.com/products/${pid}`, product)
        .then(()=>alert('Product edited Successfully'))
        .catch((err)=>console.log(err))
    }
  return (
    <div className='container p-5'>
        <div className='col-lg-6 p-5 shadow-lg mx-auto'>
            <h6 className='display-6 fw-bold text-center mb-3 '>Edit Product</h6>
            <form onSubmit={submitHandler}>
                <input type='text' name='name' onChange={EditProduct} className='form-control mb-3' placeholder='Product Name' />
                <textarea type='text' name='desc' onChange={EditProduct} className='form-control mb-3' placeholder='Product Description' ></textarea>
                <input type='number' name='price' onChange={EditProduct} className='form-control mb-3' placeholder='Product Price' />
                <input type='text' name='img' onChange={EditProduct} className='form-control mb-3' placeholder='Product Image' />
                <button className='btn btn-primary'>Edit Product</button>
            </form>
        </div>
    
    </div>
  )
}

export default EditProduct
