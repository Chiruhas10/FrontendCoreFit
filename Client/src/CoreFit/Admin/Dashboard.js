import BG1 from '../assets/BG1.jpeg';
import { Link, Outlet } from 'react-router';

const Dashboard = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <aside className='col-lg-3 p-4 bg-light'>
          <Link to="" className='text-decoration-none'>
            <h1 className='fw-semibold'>Dashboard</h1>
          </Link>

          <Link to="addproduct" className='text-decoration-none'>
            <button className='fw-semibold my-3 w-100'>Add Product</button>
          </Link>

          <Link to="viewcollections" className='text-decoration-none'>
            <button className='fw-semibold my-3 w-100'>View Collections</button>
          </Link>

          <Link to="/admin" className='text-decoration-none'>
            <button className='fw-semibold my-3 w-100'>Logout</button>
          </Link>
        </aside>

        <div
          className='col-lg-9 p-5'
          style={{
            backgroundImage: `linear-gradient(rgba(39, 43, 43, 0.82), rgba(0, 0, 0, 0.5)), url(${BG1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh'
          }}
        >
          {/* CHILD ROUTES RENDER HERE */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
