import { Link } from "react-router-dom";
import contactsService from "../services/contacts";

const AddInfo = ({
  setAddress,
  setName,
  setNumber,
  setEmail,
  email,
  name,
  number,
  address,
  setContacts,
  contacts,
}) => {
  const addInfo = (event) => {
    event.preventDefault();

    const newContacts = {
      FullName: name,
      Email: email,
      PhoneNumber: number,
      Address: address,
    };
    if (name.length === 0) {
      alert("Please Enter Full Name.");
    } else if (email.length === 0) {
      alert("Please Enter Email Id");
    } else if (number.length === 0) {
      alert("Please Enter Phone Number.");
    } else if (address.length === 0) {
      alert("Please Enter Address.");
    } else if (contacts.some((contact) => contact.PhoneNumber === number)) {
      alert("Number is already exist, Please type unique number.");
    } else {
      contactsService.create(newContacts).then((response) => {
        console.log(response);
        setContacts(contacts.concat(newContacts));
        setName("");
        setEmail("");
        setNumber("");
        setAddress("");
        alert(`${name}, added`);
      });
    }
  };

  const nameChange = (event) => {
    setName(event.target.value);
  };
  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const numberChange = (event) => {
    setNumber(event.target.value);
  };
  const addressChange = (event) => {
    setAddress(event.target.value);
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

      <div className="form-container d-flex justify-content-center align-items-center">
        <form
          className="form-content col-12 col-md-6 col-lg-4"
          onSubmit={addInfo}
        >
          <label className="form-label">Full Name: </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={nameChange}
          />
          <br />
          <label className="form-label">Email: </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={emailChange}
          />
          <br />
          <label className="form-label">Phone Number: </label>
          <input
            type="number"
            className="form-control"
            value={number}
            onChange={numberChange}
          />
          <br />
          <label className="form-label">Address: </label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={addressChange}
          />
          <button type="submit" className="btn btn-success mt-4">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddInfo;
