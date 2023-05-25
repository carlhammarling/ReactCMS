import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import RedBtn from "../../components/Buttons/RedBtn/RedBtn";
import "./Login.scss";

function Login({ user, setUser }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);

    if (formData.email == "" || formData.password == "") {
      setError("You have to fill in all feilds!");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8080/api/users/login",
        formData
      );
      console.log(res);
      if (res.data) {
        //Setting user to the data stored in the MongoDB
        setUser(res.data);

        //Save usertoken
        localStorage.setItem("token", res.data.token);

        //Resets the login-form
        setFormData({
          email: "",
          password: "",
        });
        navigate("/");
      }
    } catch (err) {
      if (err.response.status == 401) {
        console.log("Wrong email or password");
        setError("Wrong email or password");
      }
    }
  };

  //Logging user when updated.
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="login">
      <div className="wrapper">
        <form onSubmit={handleSubmit} noValidate>
          
          <div className="input-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="header">
            {error ? <p className="error">{error}</p> : <p>Please Login To Your Account</p>}
          </div>
          <RedBtn text="Login" />
          {/* <button type="submit" id="btn-submit">Submit</button> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
