import { Link } from "react-router-dom";

const Contact = ({ contacts, setContacts}) => {

  //for delete functionality
  const deleteBtn = (id) => {
    //it filter the contacts and give new array which doesnot include the id which is passed in deletebtn argument.
    setContacts(contacts.filter(contact => contact.id !== id))
  }
  return (
    <>
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/search" className="nav-link">
              Search
            </Link>
          </li>
          <li>
            <Link to="/groups" className="nav-link">
              Groups
            </Link>
          </li>
          <li>
            <Link to="/add" className="nav-link">
              Add
            </Link>
          </li>
        </ul>
      </nav>
      <h1>Contacts Info</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.FullName} - {contact.Email} - {contact.PhoneNumber} -{" "}
            {contact.Address} <button onClick={() => deleteBtn(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contact;
