//import express library to create web server
const express = require("express");
//instance of express app
const app = express();
//load environment variables from .env file
require("dotenv").config();
//const mongoose = require('mongoose');

const Contact = require("./models/contact");

//serve static files from the "dist" directory
app.use(express.static("dist"));

//array to store contact details
//let contacts = [];

//middleware for logging requests
const requestLogger = (req, res, next) => {
  console.log("Method:", req.method); //http method get,post
  console.log("Path:  ", req.path); //request path
  console.log("Body:  ", req.body); //request body
  console.log("---"); //seprator for read
  next(); //calling next middleware functionprinting of request logger
};

const errorHandler = (error, request, response, next) => {
  //log the error message to the console for debugging purposes
  console.error(error.message);
  //check if the error is a CastError (e.g., invalid MongoDB ObjectId)
  if (error.name === "CastError") {
    //respond with a 400 Bad Request status and a custom error message
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }
  //pass the error to the next error-handling middleware
  next(error);
};

//import the CORS library to enable Cross-Origin Resource Sharing
const cors = require("cors");
//import the Contact model from the models directory
const contact = require("./models/contact");
//use cors middleware to allow requests from different origins
app.use(cors());

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
app.get("/api/contacts/:id", (request, response, next) => {
  // Access the id parameter from the URL
  const contactId = request.params.id;
  // Use the contactId to find the contact in the database
  Contact.findById(contactId)
    .then((contact) => {
      if (contact) {
        response.json(contact);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
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
    .catch((error) => next(error));
});

//route to post a contact
app.post("/api/contacts", (req, res, next) => {
  //extract the request body
  const body = req.body;

  //conditions to chek missing fields
  if (!body.FullName) {
    return res.status(400).json({
      error: "FullName missing",
    });
  } else if (!body.Email) {
    return res.status(400).json({
      error: "Email missing",
    });
  } else if (!body.PhoneNumber) {
    return res.status(400).json({
      error: "PhoneNumber missing",
    });
  } else if (!body.Address) {
    return res.status(400).json({
      error: "Address missing",
    });
  } else if (isNaN(body.PhoneNumber)) {
    return res.status(400).json({
      error: "PhoneNumber must be a number",
    });
  }

  //extract fields from the body
  const { FullName, Email, PhoneNumber, Address } = body;
  //create a new contact
  const contact = new Contact({
    FullName,
    Email,
    PhoneNumber,
    Address,
  });
  //save the new contact to the database
  contact
    .save()
    .then((savedContact) => {
      res.json(savedContact);
    })
    .catch((error) => next(error));
});

//use the unknownEndpoint middleware to handle unknown endpoints
app.use(unknownEndpoint);
app.use(errorHandler);

//run the server at 3001 port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on the ${PORT}`);
});
