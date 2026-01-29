

const Footer = () => {
  return (
    <div>

      <footer className="bg-dark text-light pt-5 pb-3">
        <div className="container">
          <div className="row">


            <div className="col-md-4 mb-4">
              <h4 className="fw-bold">CoreFit</h4>
              <p>Premium fitness apparel designed for performance, comfort, and style.
                Push your limits with CoreFit.</p>
            </div>


            <div className="col-md-2 mb-4">
              <h5 className="fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-light text-decoration-none">Home</a></li>
                <li><a href="/shop" className="text-light text-decoration-none">Shop</a></li>
                <li><a href="/collections" className="text-light text-decoration-none">Collections</a></li>
                <li><a href="/about" className="text-light text-decoration-none">About</a></li>
                <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              </ul>
            </div>


            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">Customer Support</h5>
              <ul className="list-unstyled">
                <li><a href="/faq" className="text-light text-decoration-none">FAQ</a></li>
                <li><a href="/shipping" className="text-light text-decoration-none">Shipping</a></li>
                <li><a href="/returns" className="text-light text-decoration-none">Returns</a></li>
                <li><a href="/privacy" className="text-light text-decoration-none">Privacy Policy</a></li>
              </ul>
            </div>


            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">Follow Us</h5>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light me-3">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light me-3">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light me-3">
                <i className="bi bi-twitter"></i>
              </a>

              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-light">
                <i className="bi bi-youtube"></i>
              </a>

            </div>

          </div>
          <hr className="border-light" />
          <p className="text-center mb-0">© {new Date().getFullYear()} CoreFit. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default Footer;
