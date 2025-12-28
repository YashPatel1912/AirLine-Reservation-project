import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { IoMdArrowRoundBack } from "react-icons/io";

export const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
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
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        alert(res_data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="login-page">
      <div>
        <NavLink to={"/"}>
          <IoMdArrowRoundBack className="back-btn" />
        </NavLink>
      </div>
      <div className="container login-details" style={{ marginTop: "4rem" }}>
        <div className="login-head">
          <h1>Sign In page</h1>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="login-contact">
            <div>
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter your Email"
                autoComplete=" off"
                value={user.email}
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
                placeholder="Enter your password"
                autoComplete=" off"
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <div className="login-button">
              <button>Sign In</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
