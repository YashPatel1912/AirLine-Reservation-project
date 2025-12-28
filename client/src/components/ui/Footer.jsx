import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <section className="container">
        <div className="footer">
          <div className="footer-details">
            <div className="details-1 detail">
              <p>Your Mind Should be stanger than your feeling. fly!!</p>
              <div className="social-icon">
                <span className="icon icon-1">
                  <FaFacebookSquare />
                </span>
                <span className="icon icon-2">
                  <FaInstagram />
                </span>
                <span className="icon icon3">
                  <FaTwitter />
                </span>
              </div>
            </div>
            <div className="details-2 detail">
              <h1>Information</h1>
              <div>
                {/* <NAvLink></NAvLink>/ */}
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>

                <li>
                  <NavLink to={"/about"}>Explore</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
                <li>
                  <NavLink to={"/ticket"}>Travel</NavLink>
                </li>
                <li>
                  <NavLink to={"/ticket"}>Manage Your Booking</NavLink>
                </li>
              </div>
            </div>
            <div className="details-3 detail">
              <h1>Quick Guide</h1>
              <div>
                <li>
                  <NavLink>FAQ</NavLink>
                </li>
                <li>
                  <NavLink>facebook</NavLink>
                </li>
                <li>
                  <NavLink>instagram</NavLink>
                </li>
                <li>
                  <NavLink>twitter</NavLink>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-end">
          <h3>Developed by Skylane..</h3>
        </div>
      </section>
    </>
  );
};
