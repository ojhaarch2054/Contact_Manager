import { Link } from "react-router-dom";
import Search from "./Search";
import contactsService from "../services/contacts";

const Contact = ({ contacts, setContacts, searchInfo, setSearchInfo }) => {
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

  //filtering contact based on the search input if contact exist and have length greater than 0
  const filteredContacts =
    contacts && contacts.length > 0
      ? contacts.filter((contact) =>
          contact.FullName.toLowerCase().includes(searchInfo.toLowerCase())
        )
      : [];
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
        <ul className="contactInfo">
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact, index) => (
              <li key={index}>
                {contact.FullName} - {contact.Email} - {contact.PhoneNumber} -{" "}
                {contact.Address}{" "}
                <button onClick={() => deleteBtn(contact.id)}>Delete</button>
              </li>
            ))
          ) : (
            <li>No contacts found</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Contact;
