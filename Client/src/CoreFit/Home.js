import React from 'react'
import BG1 from './assets/BG1.jpeg'
import BG2 from './assets/BG2.jpg'
import BG3 from './assets/BG3.jpg'
import BG4 from './assets/BG4.jpg'
import card1 from './assets/card1.jpg'
import card2 from './assets/card2.jpg'
import card3 from './assets/card3.jpg'
import card4 from './assets/card4.jpg'
import pic1 from './assets/pic1.webp'
import pic2 from './assets/pic2.webp'
import pic3 from './assets/pic3.webp'
import pic4 from './assets/pic4.jpeg'
import { Link, NavLink } from 'react-router'

const Home = () => {
  return (
    <div>
      <div id="corefitCarousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    
    <div
      className="carousel-item active"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BG1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className='display-3 fw-bold'>Elevate Your Performance</h1>
        <p className='lead fw-semibold'>Premium activewear designed for strength, comfort, and style.</p>
        <Link to="/shop"><button className='Slidebutton btn btn-lg mt-4'>Shop Now</button></Link>
      </div>
      
    </div>

   
    <div
      className="carousel-item"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BG2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className='display-3 fw-bold'>Train Hard. Look Good.</h1>
        <p className='lead fw-semibold'>Gear that supports your grind inside and outside the gym.</p>
        <NavLink to={'/collections'}><button className="Slidebutton btn btn-lg mt-4">Explore Collection</button></NavLink>
      </div>
    </div>

   
    <div
      className="carousel-item"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BG3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className='display-3 fw-bold'>CoreFit Essentials</h1>
        <p className='lead fw-semibold'>Trusted by athletes. Perfected for you.</p>
        <NavLink to={'/shop'}><button className="Slidebutton btn btn-lg mt-4">View Bestsellers</button></NavLink>
      </div>
    </div>
  </div>

  {/* Controls */}
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#corefitCarousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#corefitCarousel"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className='container-fluid text-bg-dark'>
<div className="container py-5 ">
  <h2 className="display-4 fw-semibold text-center mb-4">Shop by Category</h2>
  <div className="row text-center">
    
    {/* Category 1 */}
    <div className="col-md-3 mb-4">
      <div className="card h-100 border-0">
        <img
          src={card1}
          className="card-img-top h-100"
          alt="Gym Wear"
          style={{ objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">Gym Wear</h5>
          <p className="card-text">Performance-ready activewear for strength & training.</p>
          <Link to="/shop">
          <button className="Slidebutton btn btn-success btn-sm">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>

    {/* Category 2 */}
    <div className="col-md-3 mb-4">
      <div className="card h-100 border-0">
        <img
          src={card2}
          className="card-img-top h-100"
          alt="Yoga"
          style={{ objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">Yoga</h5>
          <p className="card-text">Stretch, flex, and move in comfort & balance.</p>
          <Link to="/shop">
          <button className="Slidebutton btn btn-success btn-sm">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>

    {/* Category 3 */}
    <div className="col-md-3 mb-4">
      <div className="card h-100 border-0">
        <img
          src={card3}
          className="card-img-top h-100"
          alt="Running"
          style={{ objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">Running</h5>
          <p className="card-text">Lightweight gear designed for speed & endurance.</p>
          <Link to="/shop">
          <button className="Slidebutton btn btn-success btn-sm">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>

    {/* Category 4 */}
    <div className="col-md-3 mb-4">
      <div className="card h-100 border-0">
        <img
          src={card4}
          className="card-img-top h-100"
          alt="Accessories"
          style={{ objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">Accessories</h5>
          <p className="card-text">Gloves, belts, bottles & more to power your sessions.</p>
          <Link to="/shop">
          <button className="Slidebutton btn btn-success btn-sm">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

{/* Featured Products Section */}
<section className="container-fluid py-5 text-bg-dark">
  <div className="container">
    <h1 className="display-4 fw-bold text-center mb-4 ">Featured Products</h1>
    <div className="row g-4">
      {/* Product 1 */}
      <div className="col-md-3 col-sm-6">
        <div className="card h-100 shadow-sm">
          <img src={pic1} className="card-img-top h-100" alt="Product 1" />
          <div className="card-body text-center">
            <h5 className="card-title">Flex Pro T-Shirt</h5>
            <p className="card-text text-muted">₹999</p>
            <Link to="/shop">
            <button className=" Slidebutton btn  btn-sm">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Product 2 */}
      <div className="col-md-3 col-sm-6">
        <div className="card h-100 shadow-sm">
          <img src={pic2} className="card-img-top h-100" alt="Product 2" />
          <div className="card-body text-center">
            <h5 className="card-title">CoreFit Joggers</h5>
            <p className="card-text text-muted">₹1,499</p>
            <Link to="/shop">
            <button className=" Slidebutton btn  btn-sm">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Product 3 */}
      <div className="col-md-3 col-sm-6">
        <div className="card h-100 shadow-sm">
          <img src={pic3} className="card-img-top h-100" alt="Product 3" />
          <div className="card-body text-center">
            <h5 className="card-title">Performance Shorts</h5>
            <p className="card-text text-muted">₹799</p>
            <Link to="/shop">
            <button className=" Slidebutton btn  btn-sm">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Product 4 */}
      <div className="col-md-3 col-sm-6">
        <div className="card h-100 shadow-sm">
          <img src={pic4} className="card-img-top h-100" alt="Product 4" />
          <div className="card-body text-center">
            <h5 className="card-title">Yoga Flex Leggings</h5>
            <p className="card-text text-muted">₹1,199</p>
            <Link to="/shop">
            <button className=" Slidebutton btn  btn-sm">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Promo Banner Section */}
<section 
  className="promo-banner text-white d-flex align-items-center justify-content-center text-center" 
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${BG4})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '50vh'
  }}
>
  <div>
    <h2 className="fw-bold mb-3">🔥 End of Season Sale</h2>
    <p className="lead mb-4">Get up to <strong>40% Off</strong> on CoreFit Activewear</p>
    <Link to="/shop"><button className=" Slidebutton btn  btn-lg">Shop the Sale</button></Link>
  </div>
</section>




    </div>
  )
}

export default Home
