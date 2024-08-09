import LogIn from "./components/LogIn";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import AddInfo from "./components/AddInfo";
import { useState, useEffect } from "react";
import Home from "./components/HomePage";
import About from "./components/About";
import SignUp from "./components/SignUp";
//import services which helps to implement server side
import contactsService from "./services/contacts";
import Edit from "./components/Edit";
import ShowContacts from "./components/ShowContacts";

function App() {
  //state to store contact info
  const [contacts, setContacts] = useState([]);

  //useEffect to fetch the data
  useEffect(() => {
    contactsService.getAll().then((data) => {
      console.log("promise fulfilled");
      setContacts(data);
    });
  }, []);

  //login component's state
  //state for email inputfield
  const [emailId, setEmailId] = useState("");
  //state for password inputfield
  const [password, setPassword] = useState("");

  //SignUp Component's state
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpPassword2, setSignUpPassword2] = useState("");

  //Addinfo component's state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  //search component's state
  const [searchInfo, setSearchInfo] = useState("");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LogIn
              setEmailId={setEmailId}
              emailId={emailId}
              password={password}
              setPassword={setPassword}
            />
          }
        />
        <Route
          path="/signUp"
          element={
            <SignUp
              signUpEmail={signUpEmail}
              signUpPassword={signUpPassword}
              setSignUpEmail={setSignUpEmail}
              setSignUpPassword={setSignUpPassword}
              signUpPassword2={signUpPassword2}
              setSignUpPassword2={setSignUpPassword2}
            />
          }
        />
        <Route path="/home" element={<Home />} />
        <Route
          path="/add"
          element={
            <AddInfo
              name={name}
              setName={setName}
              email={email}
              number={number}
              setEmail={setEmail}
              setNumber={setNumber}
              address={address}
              setAddress={setAddress}
              contacts={contacts}
              setContacts={setContacts}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/contact"
          element={
            <Contact
              contacts={contacts}
              setContacts={setContacts}
              searchInfo={searchInfo}
              setSearchInfo={setSearchInfo}
            />
          }
        />
         <Route path="/edit" element={<Edit />} />
         <Route path="/contact/details" element={<ShowContacts />} />
        <Route path="/signup" element={<div loading />} />
      </Routes>
    </>
  );
}

export default App;
