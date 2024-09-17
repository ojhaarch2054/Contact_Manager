//import necessary modules from react-router-dom for navigation and URL parameters
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
//import the contactsService to interact with the backend
import contactsService from "../services/contacts";

//define the Edit component which takes setContacts and contacts as props
const Edit = ({ setContacts, contacts }) => {
  //function to navigate programmatically
  const navigate = useNavigate();

  //extracting the id parameter from url
  const { id } = useParams();

  //initializing state contact for store and manage data of single contact being edited or viewed
  const [contact, setContact] = useState({
    FullName: "",
    Email: "",
    PhoneNumber: "",
    Address: "",
  });

  //useEffect hook to fetch data when component mount
  useEffect(() => {
    contactsService
      .getById(id) //fetching contact detail by id
      .then((initialContact) => {
        setContact(initialContact); //update contact state
      })
      .catch((error) => {
        console.error("Failed to fetch contact details", error);
      });
  }, [id]);

  // handleChange function updates the contact state when form inputs change
  const handleChange = (e) => {
    //get the name and value of the input field that triggered the change event
    const name = e.target.name;
    const value = e.target.value;

    //update the contact state with the new value for the corresponding field
    setContact((prevContact) => {
      //create a new object that contains all the previous contact state
      const updatedContact = {
        ...prevContact, //spread the previous contact state
        [name]: value, //update the specific field with the new value
      };

      //return the updated contact object to set it as the new state
      return updatedContact;
    });
  };

  //define the editSubmit function to handle form submission
  const editSubmit = (e) => {
    //prevent the default form submission behavior
    e.preventDefault();
    //call the update method from contactsService to update the contact data
    contactsService
      .update(id, contact) //pass the contact id and updated contact data
      .then((response) => {
        //console.log("Update successful", response);
        //on successful update, update the contacts state with the new data
        setContacts(contacts.map((c) => (c.id !== id ? c : response.data)));
        alert("Updated");
        //navigate to the "/contact" route after successful update
        navigate("/contact");
        //refresh the page
        window.location.reload();
      })
      .catch((error) => {
        //alert message in case of an error
        alert(`Failed to update contact: ${error.message}`);
        console.log(error);
      });
  };

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

      <div className="d-flex justify-content-center align-items-center">
        <div className="card-body d-flex justify-content-center mb-5">
          <form
            className=" col-auto w-75 d-flex mt-5 flex-column"
            onSubmit={editSubmit}
          >
            <label className="col-form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="FullName"
              value={contact.FullName}
              onChange={handleChange}
            />
            <label className="col-sm-3 col-form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="Email"
              value={contact.Email}
              onChange={handleChange}
            />
            <label className="col-sm-4 col-form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              name="PhoneNumber"
              value={contact.PhoneNumber}
              onChange={handleChange}
            />
            <label className="col-sm-3 col-form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="Address"
              value={contact.Address}
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-success mt-4">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
