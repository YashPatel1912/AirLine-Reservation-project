/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import "../App.css";

export const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className=" content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page not found</h4>
          <p>
            Oops! Looks like the page you're searching for can't be found.
            Double-check the URL for typos or navigate back to our homepage to
            explore further
          </p>
          <div className="btns">
            <NavLink to="/">return home</NavLink>
            <NavLink to="/contact">report problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
