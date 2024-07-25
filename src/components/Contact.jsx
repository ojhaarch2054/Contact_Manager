import { Link } from "react-router-dom";
import Search from "./Search";

const Contact = ({ contacts, setContacts, searchInfo, setSearchInfo }) => {
  //for delete functionality
  const deleteBtn = (id) => {
    //it filter the contacts and give new array which doesnot include the id which is passed in deletebtn argument.
    setContacts(contacts.filter((contact) => contact.id !== id));
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
      <Search
        searchInfo={searchInfo}
        setSearchInfo={setSearchInfo}
        contacts={contacts}
      />

      <div className="mt-5 d-flex justify-content-center flex-column text-white">
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
