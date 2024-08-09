//importing useNavigate
import { Link, useNavigate } from "react-router-dom";
import add_contact from "../photos/add_contact.webp";

const Home = () => {
  //create  navigate function
  const navigate = useNavigate();

  //onClick functiion for getStarted Button
  const getStartedBtn = () => {
    //when click the btn it navigates the add contact
    navigate("/add");
  };

  return (
    <div className="homeNav">
      <nav className="navBar fs-5 fw-bold">
        <ul className="nav justify-content-end p-4">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contacts
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              Log Out
            </Link>
          </li>
        </ul>
      </nav>

      <div className="container mt-5 p-5">
        <div className="col-6 ">
          <img
            src={add_contact}
            alt="Description of the image"
            className="img-fluid shadow-lg rounded position-absolute w-25"
          />
        </div>
        <div className="row d-flex justify-content-end position-absolute mt-5 w-75 mx-5 ">
          <div className="col-6">
            <h1 className="mb-3">Add Contact</h1>
            <p className="lead text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
            <button onClick={getStartedBtn} className="h4 text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
