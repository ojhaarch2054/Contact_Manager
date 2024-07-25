import { Link } from "react-router-dom";
//importing useNavigate
import { useNavigate } from "react-router-dom";

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
      <nav>
        <ul className="nav justify-content-end mt-3 ">
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
      <div className="mt-5 pt-5 text-white">
        <h1 className="display-1 mt-5">Add Contact</h1>
        <p className="lead text-right  w-25 text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          in,hfhjhjhksn{" "}
        </p>
        <button onClick={getStartedBtn}>Get Started</button>
      </div>
    </div>
  );
};

export default Home;
