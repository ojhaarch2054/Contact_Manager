import LogIn from "./components/LogIn";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Group from "./components/Group";
import AddInfo from "./components/AddInfo";
import { useState } from "react";

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
  ]);

  //login component's state
  //state for email inputfield
  const [emailId, setEmailId] = useState("hello");
  //state for password inputfield
  const [password, setPassword] = useState("hello");

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
        <Route path="/signup" element={<div loading />} />
        <Route path="/contact" element={<Contact contacts={contacts} setContacts={setContacts}/>} />
        <Route path="/groups" element={<Group contacts={contacts} />} />
        <Route
          path="/search"
          element={
            <Search
              setSearchInfo={setSearchInfo}
              searchInfo={searchInfo}
              contacts={contacts}
            />
          }
        />
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
      </Routes>
    </>
  );
}

export default App;
