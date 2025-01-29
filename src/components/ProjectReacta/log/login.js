import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './login.css';

function Main() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfrimPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  function validate(e) {
    e.preventDefault();

    if (username.length > 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("Username must be 8 letters long.");
      setUserColor("red");
    }

    if (email.includes('@')) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setEmailColor("red");
      setErrorEmail("Email invalid");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password should be 8 letters long ");
      setPasswordColor("red");
    }

    if (password !== "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
      navigate('/signup'); // Redirect to signup page
    } else {
      setErrorConfirmPassword("Passwords not matched");
      setConfirmPasswordColor("red");
    }
  }

  return (
    <div className='bodys'>
      <div className="card">
        <div className="card-image"></div>

        <form className="forms">
          <h1>Sign Up</h1>
          <input className="inputs"
            type="text"
            placeholder="Name"
            style={{ borderColor: userColor }}
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />

          <p className="error">{errorUserName}</p>

          <input
            className="inputs"
            type="text"
            placeholder="Email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errorEmail}</p>

          <input
            className="inputs"
            type="password"
            placeholder="Password"
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errorPassword}</p>

          <input
            className="inputs"
            type="password"
            placeholder="Confirm Password"
            style={{ borderColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error">{errorConfrimPassword}</p>

          <button className="submit-btn" onClick={validate}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Main;
