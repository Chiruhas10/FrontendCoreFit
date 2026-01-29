import React from "react";
import SendEnquiry from "./SendEnquiry";

export default function Contact() {
  return (
    <div className="container-fluid text-bg-dark">
    <div className="container py-5">
      {/* Page Title */}
      <div className="text-center mb-5">
        <h2 className=" display-4 fw-bold">Contact Us</h2>
        <p className="text-muted">
          Have questions? We’d love to hear from you. Reach out and we’ll get back to you as soon as possible.
        </p>
        
      </div>

      <div className="row">

         {/* Contact Form */}
        <div className="col-md-6">
          <h5 className="fw-bold mb-3">Send us a Message</h5>
          <SendEnquiry />
        </div>


        {/* Contact Info */}
        <div className="col-md-6 mb-4">
          <h5 className="fw-bold mb-3">Get in Touch</h5>
          <p><strong>Address:</strong> 123 CoreFit Street, Fitness City, India</p>
          <p><strong>Email:</strong> support@corefit.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>

          {/* Optional Map */}
          <div className="mt-4">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387144.007583368!2d-74.2581938698558!3d40.70583164067127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzIxLjAiTiA3NMKwMTUnMTkuMCJX!5e0!3m2!1sen!2sin!4v16123456789"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <hr className="border-light" />

       
      </div>
    </div>
    </div>
    
  );
}
