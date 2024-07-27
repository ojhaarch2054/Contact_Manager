//importing useNavigate
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LogIn = ({ setEmailId, setPassword, password, emailId }) => {
  //create  navigate function
  const navigate = useNavigate();

  const submitLogIn = (event) => {
    event.preventDefault();

    if (emailId.length == 0) {
      alert("Please Enter your Email Id");
    } else if (password.length == 0) {
      alert("Please Enter your Password");
    } else {
      navigate("/home");
    }
  };
  //const logInBtn = () => {};
  const changeEmail = (event) => {
    setEmailId(event.target.value); // Use the setEmailId prop to update the emailId state in App.jsx
  };
  const changePassword = (event) => {
    setPassword(event.target.value); // Use the setPassword prop to update the password state in App.jsx
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary text-black logIn ">
        <form
          onSubmit={submitLogIn}
          className="text-center fw-bold shadow-lg p-3 mb-5 bg-muted rounded w-50 h-60"
        >
          <span className="display-1 ">Welcome,</span>
          <br /> <p className="h4">To Your Smart Contact Manager</p> <br />
          <input
            type="email"
            placeholder="Email Id"
            onChange={changeEmail}
            value={emailId}
            className="h2 "
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={changePassword}
            value={password}
            className="h2"
          />
          <br />
          <button type="submit" className="h2 text-black logInBtn rounded">
            Log In
          </button>
          <p className="mt-4 fs-5 fw-light ">
            Don&apos;t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default LogIn;
