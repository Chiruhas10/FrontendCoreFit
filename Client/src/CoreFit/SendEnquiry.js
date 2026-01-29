import React, { Component } from 'react';
import axios from 'axios';

axios.defaults.baseURL = "https://servercorefit.onrender.com";

export default class SendEnquiry extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      mobile: '',
      email: ''
    };
  }

  changeData = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    const nameError = document.getElementById('nameError');
    const mobileError = document.getElementById('mobileError');
    const emailError = document.getElementById('emailError');

    const { name, mobile, email } = this.state;

    const alphaExp = /^[a-zA-Z\s]+$/;
    const mobileExp = /^[0-9]{10}$/;
    const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // validations
    nameError.textContent = name.match(alphaExp) ? '' : '*Name must be alphabetic';
    mobileError.textContent = mobile.match(mobileExp) ? '' : '*Mobile must be 10 digits';
    emailError.textContent = email.match(emailExp) ? '' : '*Email is not valid';

    if (
      name.match(alphaExp) &&
      mobile.match(mobileExp) &&
      email.match(emailExp)
    ) {
      // ✅ SAVE TO DATABASE
      axios.post("/api/enquiries", { name, mobile, email })
        .then(() => {
          alert("Your enquiry has been sent successfully!");
          this.setState({ name: '', mobile: '', email: '' });
        })
        .catch((err) => {
          console.log(err);
          alert("Failed to send enquiry");
        });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type='text'
            name='name'
            placeholder='Enter Name'
            value={this.state.name}
            onChange={this.changeData}
            className='form-control mb-4'
          />
          <p id='nameError' className='error-message'></p>

          <input
            type='tel'
            name='mobile'
            placeholder='Mobile number'
            value={this.state.mobile}
            onChange={this.changeData}
            className='form-control mb-4'
          />
          <p id='mobileError' className='error-message'></p>

          <input
            type='email'
            name='email'
            placeholder='Email Address'
            value={this.state.email}
            onChange={this.changeData}
            className='form-control mb-4'
          />
          <p id='emailError' className='error-message'></p>

          <input type='submit' className='btn btn-primary' />
        </form>
      </div>
    );
  }
}
