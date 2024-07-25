import LogIn from "./components/LogIn";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import AddInfo from "./components/AddInfo";
import { useState } from "react";
import Home from "./components/HomePage";
import About from "./components/About";
import SignUp from "./components/SignUp";

function App() {
  //state to store contact info
  const [contacts, setContacts] = useState([
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
      id: "3",
      FullName: "harry",
      Email: "harry@gmail.com",
      PhoneNumber: "8526995456",
      Address: "Austria",
    },
    {
      id: "4",
      FullName: "Raman",
      Email: "Raman@gmail.com",
      PhoneNumber: "8526985456",
      Address: "vienna",
    },
  ]);

  //login component's state
  //state for email inputfield
  const [emailId, setEmailId] = useState("");
  //state for password inputfield
  const [password, setPassword] = useState("");

  //SignUp Component's state
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpPassword2, setSignUpPassword2] = useState("")

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
         <Route path="/signUp" element={<SignUp signUpEmail={signUpEmail} signUpPassword={signUpPassword} setSignUpEmail={setSignUpEmail} setSignUpPassword={setSignUpPassword} signUpPassword2={signUpPassword2} setSignUpPassword2={setSignUpPassword2} />} />
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
        <Route path="/signup" element={<div loading />} />
      </Routes>
    </>
  );
}

export default App;
