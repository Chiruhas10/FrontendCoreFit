import React, { useState } from 'react';
import AdminStyles from './adminStyles.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router';

axios.defaults.baseURL = "https://servercorefit.onrender.com";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SubmitHandler = (e) => {
    e.preventDefault();

    axios.post('/api/admin/login', { email, password })
      .then((res) => {
        if (res.data.success) {
          alert("Login Successful");
          navigate('/dashboard');
        } else {
          alert(res.data.message || "Invalid credentials");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Server error");
      });
  };

  return (
    <main>
      <section className={AdminStyles.bread}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h1>Admin Login</h1>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-5 ${AdminStyles.adminlogin}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 mx-auto'>
              <form
                className={AdminStyles.bx_shadow}
                onSubmit={SubmitHandler}
              >

                <input
                  type='email'
                  className='form-control mb-3'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type='password'
                  className='form-control mb-3'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <input
                  type='submit'
                  className='btn btn-primary w-100'
                  value='Login'
                />

              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admin;
