//import mongose library to interact with mongodb
const mongoose = require("mongoose");

//set mongoose to use the old query parser
mongoose.set("strictQuery", false);

//get uri from environment variable
const url = process.env.MONGODB_URI;

//log the connection attempt to the console
console.log("connecting to", url);

//connect to mongodb database by using uri
mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    //if the connection fail log an error msg
    console.log("error connecting to MongoDB:", error.message);
  });

//define a schema for a contact
const contactSchema = new mongoose.Schema({
  FullName: String,
  Email: String,
  PhoneNumber: String,
  Address: String,
});

//modify the to json method of the schema to transform the returned object
contactSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    //convert the _id field to a string and assign it to id
    returnedObject.id = returnedObject._id.toString();
    //remove the _id field from the returned object
    delete returnedObject._id;
    //remove the __v field from the returned object
    delete returnedObject.__v;
  },
});

//export the Contact model based on the contactSchema
module.exports = mongoose.model("Contact", contactSchema);
