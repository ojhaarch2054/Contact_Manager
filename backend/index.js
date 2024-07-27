//import express library to create web server
const express = require("express");
//instance of express app
const app = express();
//add mmiddleware to parse incoming JSON requests
app.use(express.json());

//corslibrary to enable Cross-Origin Resource Sharing
const cors = require("cors");

//use cors middleware to allow requests from different origins
app.use(cors());

let contacts = [
  {
    id: "1",
    FullName: "abc",
    Email: "abc@gmail.com",
    PhoneNumber: "8526985456",
    Address: "Colombia",
  },
  {
    id: "2",
    FullName: "sinchang",
    Email: "sinchang@gmail.com",
    PhoneNumber: "85478585456",
    Address: "Yliopistokatu",
  },
  {
    id: "3523",
    FullName: "harry",
    Email: "harry@gmail.com",
    PhoneNumber: "859674",
    Address: "oulu",
  },
  {
    id: "b236",
    FullName: "Raman jekky",
    Email: "raman@gmail.com",
    PhoneNumber: "75896445",
    Address: "Porvo",
  },
  {
    id: "780d",
    FullName: "prity",
    Email: "prity@gmail.com",
    PhoneNumber: "7859696",
    Address: "pune",
  },
];

//middleware for logging requests
const requestLogger = (req, res, next) => {
  console.log("Method:", req.method); //http method get,post
  console.log("Path:  ", req.path); //request path
  console.log("Body:  ", req.body); //request body
  console.log("---"); //seprator for read
  next(); //calling next middleware function
};
app.use(requestLogger);

//define  routes to the applicetion
//request parameter contains all of the information of the HTTP request
//response parameter is used to define  how the request is responded to

//route to get all contacts details
app.get("/api/contacts", (req, res) => {
  res.json(contacts);
});

//fetching a single resources
app.get("/api/contacts/:id", (request, response) => {
  //get id from request parameter
  const id = request.params.id;
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
app.delete("/api/contacts/:id", (request, response) => {
  const id = request.params.id.toString();
  contacts = contacts.filter((contact) => contact.id !== id);

  response.status(204).end();
});

//to add new contacts to the server
function generateUniqueId() {
  //converting  number to a base-36 string which includes digits and letters with .toString(36)
  return Math.random().toString(36).slice(2, 11);
}

//route to post a contact
app.post("/api/contacts", (req, res) => {
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
  const newContact = {
    id: generateUniqueId(), //ffunction to generate a unique ID
    FullName: body.FullName,
    Email: body.Email,
    PhoneNumber: body.PhoneNumber,
    Address: body.Address,
  };
  //add new contact to the  contact list
  contacts = contacts.concat(newContact);
  res.json(newContact);
});

//middleware for handling unknown endpoints
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};
app.use(unknownEndpoint);

//run the server at 3001 port
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
