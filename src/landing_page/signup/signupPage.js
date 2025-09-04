import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./index.css"; // Assuming you have some styles for layout

function SignupPage() {
  // We use a state to keep track of which form to show.
  // By default, we show the login form.
  const [isLoginView, setIsLoginView] = useState(true);

  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <div className="auth-container">
      {/* This is a conditional render.
        If isLoginView is true, it renders the Login component.
        Otherwise, it renders the Signup component.
      */}
      {isLoginView ? <Login /> : <Signup />}

      {/* This is the toggle link that allows users to switch between forms.
        It's now managed here, in the parent component.
      */}
      <div className="toggle-message">
        {isLoginView ? (
          <p>
            Don't have an account?{" "}
            <span onClick={toggleView} className="toggle-link">
              Sign Up
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={toggleView} className="toggle-link">
              Login
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default SignupPage;
