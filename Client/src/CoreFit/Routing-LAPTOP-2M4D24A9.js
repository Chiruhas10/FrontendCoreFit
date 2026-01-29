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
import Welcome from './Admin/Welcome'
import AddProduct from './Admin/AddProduct'
import ViewCollections from './Admin/ViewCollections'
import ProductDetails from './ProductDetails'
import AddSize from './Admin/AddSize'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' Component={Home} />
        <Route path='/shop' Component={Shop} />
        <Route path='/about' Component={About} />
        <Route path='/collections' Component={Collections} />
        <Route path='/Productdetails/:id' Component={ProductDetails} />
        <Route path='/contact' Component={Contact} />
        <Route path='*' Component={NoPage} />
        <Route path='/admin' Component={AdminLogin} />
        <Route path='/dashboard' Component={Dashboard}>
         <Route path="addsize/:id" Component={AddSize } />
         <Route path="welcome" Component={Welcome } />
        <Route path='ViewCollections' Component={ViewCollections} />
        <Route path='AddProduct' Component={AddProduct} />
        </Route>
    </Routes>
  )
}

export default Routing
