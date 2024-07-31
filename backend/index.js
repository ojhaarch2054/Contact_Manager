//load environment variables from .env file
require("dotenv").config();
//import express library to create web server
const express = require("express");
//const mongoose = require('mongoose');
//instance of express app
const app = express();
const Contact = require("./models/contact");

//array to store contact details
let contacts = [];

//middleware for logging requests
const requestLogger = (req, res, next) => {
  console.log("Method:", req.method); //http method get,post
  console.log("Path:  ", req.path); //request path
  console.log("Body:  ", req.body); //request body
  console.log("---"); //seprator for read
  next(); //calling next middleware function
};
//import the CORS library to enable Cross-Origin Resource Sharing
const cors = require("cors");
//use cors middleware to allow requests from different origins
app.use(cors());
app.use(express.static("dist"));
//add mmiddleware to parse incoming JSON requests
app.use(express.json());
app.use(requestLogger);

//middleware for handling unknown endpoints
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

//route to get all contacts details
app.get("/api/contacts", (request, response) => {
  Contact.find({}).then((contacts) => {
    response.json(contacts); //respond contacts in json format
  });
});

//fetching a single resources
app.get("/api/contacts/:id", (request, response) => {
  //get id from request parameter
  const id = request.params.id;
  //find the contact with the matching id in the contacts array
  const contact = contacts.find((contact) => contact.id === id);
  //if contact found respond with the contact detail in json form
  if (contact) {
    response.json(contact);
    //if no matching contact is found respond 404 status code
  } else {
    response.status(404).end();
  }
});

//route to delete a contact by id
//making HTTp delete request
app.delete("/api/contacts/:id", (request, response, next) => {
  //find the contact by ID and delete it from the database
  Contact.findByIdAndDelete(request.params.id)
    .then((result) => {
      //if the deletion is successful, respond with a 204 status code
      response.status(204).end();
    })
    //ff an error occurs, pass it to the next middleware
    .catch((error) => error);
});

//route to post a contact
app.post("/api/contacts", (req, res) => {
  //extract the request body
  const body = req.body;

  //conditions to chek missing fields
  if (!body.FullName) {
    return response.status(400).json({
      error: "FullName missing",
    });
  } else if (!body.Email) {
    return response.status(400).json({
      error: "Email missing",
    });
  } else if (!body.PhoneNumber) {
    return response.status(400).json({
      error: "PhoneNumber missing",
    });
  } else if (!body.Address) {
    return response.status(400).json({
      error: "Address missing",
    });
  }

  //create a new contact
  const contact = new Contact({
    FullName: body.FullName,
    Email: body.Email,
    PhoneNumber: body.PhoneNumber,
    Address: body.Address,
  });
  //save the new contact to the database
  contact.save().then((savedContact) => {
    res.json(savedContact);
  });
});

//use the unknownEndpoint middleware to handle unknown endpoints
app.use(unknownEndpoint);

//run the server at 3001 port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on the ${PORT}` );
});
