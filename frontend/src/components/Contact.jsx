import { Link } from "react-router-dom";
import Search from "./Search";
import contactsService from "../services/contacts";
//import icon for action
import { FaInfoCircle, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Contact = ({ contacts, setContacts, searchInfo, setSearchInfo }) => {
  const navigate = useNavigate();
  //for delete functionality
  const deleteBtn = (id) => {
    //to findd the contact to delete by its id
    const contactToDelete = contacts.find((contact) => contact.id === id);
    //to confirm with the user if they really want to delete the contact or not
    if (window.confirm(`Delete ${contactToDelete.FullName} ?`)) {
      //if yes then call the remove method from the contactsService to delete the contact from the server
      contactsService
        .remove(id)
        .then(() => {
          //then update the state to remove the contact locally after successful deletion from the server
          setContacts(contacts.filter((contact) => contact.id !== id));
        })
        .catch((error) => {
          //err msg if the deletion fail
          console.error("Failed to delete contact: ", error);
        });
    }
  };

  const editBtn = (id) => {
    navigate(`/edit/${id}`);
  };

  const showContactsBtn = (id) => {
    navigate(`/contact/details/${id}`);
  };

  //create a new array called filteredContacts by filtering the contacts array
  const filteredContacts = contacts.filter((contact) => {
    //check if the contact exists and has a FullName property
    if (contact && contact.FullName) {
      //convert the FullName to lowercase and check if it includes the searchInfo (also in lowercase)
      if (contact.FullName.toLowerCase().includes(searchInfo.toLowerCase())) {
        //if it does, include this contact in the filteredContacts array
        return true;
      }
    }
    //if any of the above conditions are not met, do not include this contact
    return false;
  });

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

        <Search
          searchInfo={searchInfo}
          setSearchInfo={setSearchInfo}
          contacts={contacts}
        />
      </nav>

      <div className="mt-5 d-flex justify-content-center flex-column text-white contactSection">
        <h1 className="text-decoration-underline headingContact">
          Contacts Info
        </h1>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Address</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className="text-capitalize">
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.FullName}</td>
                  <td>{contact.Email}</td>
                  <td>{contact.PhoneNumber}</td>
                  <td>{contact.Address}</td>
                  <td>
                    <button className="btn btn-info me-2">
                      <FaInfoCircle
                        onClick={() => showContactsBtn(contact.id)}
                      />
                    </button>
                    <button className="btn btn-warning me-2">
                      <FaEdit onClick={() => editBtn(contact.id)} />
                    </button>
                    <button className="btn btn-danger">
                      <FaTrash onClick={() => deleteBtn(contact.id)} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No contacts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contact;
