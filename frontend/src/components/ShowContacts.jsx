import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import contactsService from "../services/contacts";

const ShowContacts = () => {
  //extracting the id parameter from url
  const { id } = useParams();
  //initializing state empty contact state
  const [contact, setContact] = useState({});

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
  }, []);


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

      <div className=" d-flex justify-content-center row mt-5">
        <h1 className="text-decoration-underline text-center">Details of {contact.FullName} : </h1>
        <div className=" d-flex justify-content-center align-items-center mt-5">
          <ul className="list-group list-group-flush w-50 vh-100 p-4 text-capitalize">
            <li className="list-group-item p-4">Full Name: {contact.FullName}</li>
            <li className="list-group-item p-4">Email: {contact.Email}</li>
            <li className="list-group-item p-4">Phone Number: {contact.PhoneNumber}</li>
            <li className="list-group-item p-4">Address: {contact.Address}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ShowContacts;
