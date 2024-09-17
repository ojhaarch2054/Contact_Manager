import { useNavigate } from "react-router-dom";

const SignUp = ({ setSignUpEmail, signUpEmail, signUpPassword, setSignUpPassword, setSignUpPassword2, signUpPassword2}) => {
     //create  navigate function
  const navigate = useNavigate();

    const submitSignUp = (event) => {
        event.preventDefault();

        if (signUpEmail.length == 0) {
          alert("Please Enter your Email Id");
        } else if (signUpPassword.length == 0) {
          alert("Please Enter your Password");
        } else if(signUpPassword !== signUpPassword2){
            alert("Password doesnot matched")
        }else{
            navigate("/");
        }
      };

      const changeSignUpId = (event) => {
        setSignUpEmail(event.target.value)
      }
      const changeSignUpPassword= (event) => {
        setSignUpPassword(event.target.value)
      }
      const changeSignUpPassword2= (event) => {
        setSignUpPassword2(event.target.value)
      }



    return(
        <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary logIn ">
        <form
          onSubmit={submitSignUp}
          className="text-center fw-bold shadow-lg p-3 mb-5 bg-muted rounded w-50 h-60"
        >
          <span className="display-4 ">Sign Up,</span>
          <br /> <p className="h4">To log in Your Smart Contact Manager</p> <br />
          <input
            type="email"
            placeholder="Email Id"
            onChange={changeSignUpId}
            value={signUpEmail}
            className="form-control mb-3 "
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={changeSignUpPassword}
            value={signUpPassword}
            className="form-control mb-3"
          /> <br />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={changeSignUpPassword2}
            value={signUpPassword2}
            className="form-control mb-3"
          />
          <br />
          <button type="submit" className="btn btn-success w-100">
            Sign Up
          </button>
        </form>
      </div>
    )
}

export default SignUp;