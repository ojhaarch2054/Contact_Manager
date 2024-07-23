//importing useNavigate
import { useNavigate } from "react-router-dom";

const LogIn = ({ setEmailId, setPassword, password, emailId }) => {
  //create  navigate function
  const navigate = useNavigate();

  const submitLogIn = (event) => {
    event.preventDefault();
    //navigate to the contact route
    navigate("/contact");
  };
  //const logInBtn = () => {};
  const changeEmail = (event) => {
    setEmailId(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div>
        <form onSubmit={submitLogIn}>
          <span>Welcome,</span>
          <br /> To Your Smart Contact Manager <br />
          <input
            id="email"
            placeholder="Email Id"
            onChange={changeEmail}
            value={emailId}
          />
          <br />
          <input
            id="password"
            type="text"
            placeholder="Password"
            onChange={changePassword}
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
