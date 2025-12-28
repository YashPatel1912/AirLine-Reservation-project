import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { IoMdArrowRoundBack } from "react-icons/io";

export const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeTokenLS } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log(res_data);
      if (response.ok) {
        storeTokenLS(res_data.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/");
      } else {
        alert(res_data.message);
      }
    } catch (error) {
      console.log("signup", error);
    }
  };

  return (
    <section className="login-page">
      <div>
        <NavLink to={"/"}>
          <IoMdArrowRoundBack className="back-btn" />
        </NavLink>
      </div>
      <div className="container login-details">
        <div className="login-head">
          <h1>Sign Up page</h1>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="login-contact">
            <div>
              <label htmlFor="username">UserName : </label>
              <input
                type="text"
                name="username"
                id="username"
                required
                placeholder=" username"
                autoComplete="off"
                value={user.username}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter your Email"
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone : </label>
              <input
                type="number"
                name="phone"
                id="phone"
                required
                placeholder="phone Number"
                autoComplete="off"
                value={user.phone}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="password">Password : </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder=" password"
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <div className="login-button">
              <button>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
