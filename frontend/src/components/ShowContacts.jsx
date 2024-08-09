import { Link } from "react-router-dom";

const ShowContacts = () => {
    return(
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

        <h3>fetching clicked contact details.......</h3>
  
      </>
    )
}

export default ShowContacts;