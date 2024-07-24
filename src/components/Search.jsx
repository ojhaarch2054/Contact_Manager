//importing link ffor navigation
import { Link } from "react-router-dom";

const Search = ({setSearchInfo, searchInfo, contacts}) => {
  console.log('Contacts:', contacts);

  //onChange eventt to handle the change in search input
  const searchChange = (event) =>{
    setSearchInfo(event.target.value)
  }

  //filtering contact based on the search input if contact exist and have length greater than 0 
  const filteredContacts = contacts && contacts.length > 0 ? contacts.filter(contact =>
    contact.FullName.toLowerCase().includes(searchInfo.toLowerCase())
  ) : [];

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
      <p>Search</p>
      <input type="text" placeholder="Search" onChange={searchChange} value={searchInfo}  className="form-control me-2"/>
      <h1>Contacts Info</h1>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact, index) => (
          <p key={index}>{contact.FullName} - {contact.Email} - {contact.PhoneNumber} -{" "}
            {contact.Address}</p>
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </>
  );
};

export default Search;
