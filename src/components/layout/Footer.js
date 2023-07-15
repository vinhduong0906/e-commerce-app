import './Footer.css';

const Footer = () => {

  return (<div className="container">

    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5  d-flex justify-content-between">



      <div className="col-4 mb-3">
        <h5>CUSTOMER SERVICES</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Help & Contact Us</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Returns & Refunds</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Online Stores</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terms & Conditions</a></li>

        </ul>
      </div>

      <div className="col-4 mb-3">
        <h5>COMPANY</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">What We Do</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Available Services</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Latest Posts</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>

        </ul>
      </div>

      <div className="col-4 mb-3">
        <h5>SOCIAL MEDIA</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Twitter</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Instagram</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Facebook</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pinterest</a></li>

        </ul>
      </div>
    </footer>
  </div>)
}; export default Footer 