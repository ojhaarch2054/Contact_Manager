//importing useNavigate
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const LogIn = ({ setEmailId, setPassword, password, emailId }) => {
  //create  navigate function
  const navigate = useNavigate();

  const submitLogIn = (event) => {
    event.preventDefault();

    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(validEmail.test(emailId)){
      //navigate to the contact route
    navigate("/contact");
    }else{
      alert('Please enter a valid email address.')
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
      <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary text-black logIn">
        <form onSubmit={submitLogIn} className="text-center fw-bold" >
          <span className="display-1 ">Welcome,</span>
          <br /> <p className="h4">To Your Smart Contact Manager</p> <br />
          <input
            type="email"
            placeholder="Email Id"
            onChange={changeEmail}
            value={emailId}
            className="h2"
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
          <button type="submit" className="h2 text-secondary">Log In</button>
          <p className="mt-4">
          Don&apos;t have an account? <Link to="/signup" className="text-black">Sign up</Link>
        </p>
        </form>

      </div>
    </>
  );
};

export default LogIn;
