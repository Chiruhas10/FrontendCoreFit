import React from 'react'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Home from './Home'
import Shop from './Shop'
import About from './About'
import Collections from './Collections'
import Contact from './Contact'
import NoPage from './NoPage'
import AdminLogin from './Admin/AdminLogin'
import Dashboard from './Admin/Dashboard'
import AddProduct from './Admin/AddProduct'
import ViewCollections from './Admin/ViewCollections'
import ProductDetails from './ProductDetails'
import Welcome from './Admin/Welcome'
import AddSize from './Admin/AddSize'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' Component={Home} />
        <Route path='/shop' Component={Shop} />
        <Route path='/about' Component={About} />
        <Route path='/collections' Component={Collections} />
        <Route path='/contact' Component={Contact} />
        <Route path='/admin' Component={AdminLogin} />
        <Route path='/dashboard' Component={Dashboard} >
        <Route index Component={Welcome} />
        <Route path='addproduct' Component={AddProduct} />
        <Route path='viewcollections' Component={ViewCollections} />
        <Route path='addsize/:id' Component={AddSize} />
        <Route path='logout' Component={AdminLogin} />
        </Route>
        <Route path='/product/:id' Component={ProductDetails} />
        <Route path='*' Component={NoPage} />
    </Routes>
  )
}

export default Routing
