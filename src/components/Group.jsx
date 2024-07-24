import { Link } from "react-router-dom";
const Group = ({contacts}) => {
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
            <Link to="/groups" className="nav-link dropdown dropdown-toggle">
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
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="">
            Family
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="">
            Friends
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="">
            Work
          </Link>
        </li>
      </ul>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.FullName} - {contact.Email} - {contact.PhoneNumber} -{" "}
            {contact.Address}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Group;
