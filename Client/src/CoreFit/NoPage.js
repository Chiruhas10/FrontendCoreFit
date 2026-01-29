import React from 'react'
import BG2 from './assets/BG2.jpg';

const NoPage = () => {
  return (
    <div className='container-fluid d-flex align-items-center text-bg-dark p-5 text-center' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BG2})`, backgroundSize: 'cover' , height: '100vh'}}>
        <div className='container'>
      <h2 className='display-4 fw-bold'>404 - Page Not Found</h2>
      <p className='lead fw-normal'>Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  )
}

export default NoPage
