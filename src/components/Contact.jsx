import { Link } from "react-router-dom";
const Contact = () => {
  const contacts = [
    {
      id: 1,
      fullname: "abc",
      email: "abc@gmail.com",
      phoneNumber: "8526985456",
    },
    {
      id: 2,
      fullname: "sinchang",
      email: "sinchang@gmail.com",
      phoneNumber: "85478585456",
    },
  ];
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
            {contact.fullname} - {contact.email} - {contact.phoneNumber}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contact;
