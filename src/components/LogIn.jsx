//importing useNavigate
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LogIn = () => {
  //create  navigate function
  const navigate = useNavigate();

  //state for email inputfield
  const [emailId, setEmailId] = useState("");
  //state for password inputfield
  const [password, setPassword] = useState("");

  const submitLogIn = (event) => {
    event.preventDefault();
    //navigate to the contact route
    navigate("/contact");
  };
  //const logInBtn = () => {};
  const changeEmail = (event) => {
    setEmailId(event.target.value);
  };
  const changeSalsana = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div>
        <form onSubmit={submitLogIn}>
          <span>Welcome,</span>
          <br /> To Your Smart Contact Manager <br />
          <input
            type="text"
            placeholder="Email Id"
            onChange={changeEmail}
            value={emailId}
          />
          <br />
          <input
            type="text"
            placeholder="Password"
            onChange={changeSalsana}
            value={password}
          />
          <br />
          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  );
};

export default LogIn;
