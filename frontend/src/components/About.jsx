import { Link } from "react-router-dom";
import about_page from "../photos/about_page.webp";

const About = () => {
  return (
    <>
      <nav className="navBar fs-5 fw-bold">
        <ul className="nav justify-content-end p-4">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contacts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Log Out
            </Link>
          </li>
        </ul>
      </nav>

      <div className="container mt-5 p-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={about_page}
              alt="Description of the image"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h1 className="h4 mb-3">About Us</h1>
              <p className="lead text-start">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique ullam hic nihil molestiae officiis obcaecati dolor
                repudiandae veritatis accusantium ipsam! Iste fugiat praesentium
                nobis quidem autem tempore, molestias reprehenderit id?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;