import { Link } from "react-router-dom";

const Edit = () => {
  return (
    <>
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

      <h3>Fetching clicked contact details to edit........</h3>

      <div className="card w-50 mt-5 d-flex justify-content-center ">
        <div className="card-body">
            <h4 className="card-title">Full Name</h4>
            <h4 className="card-title">Email</h4>
            <h4 className="card-title">Phone Number</h4>
            <h4 className="card-title">Address</h4>

        </div>
        <button>Update</button>
        

      </div>

    </>
  );
};

export default Edit;
