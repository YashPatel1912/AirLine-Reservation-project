import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="container ">
      <div className="navbar-container ">
        <div className="logo">skyline</div>

        <nav>
          <ul>
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            {/* <NavLink to={"/destination"}>
              <li>Ticket</li>
            </NavLink> */}

            <NavLink to={"/about"}>
              <li>About</li>
            </NavLink>

            <NavLink to={"/contact"}>
              <li>contact</li>
            </NavLink>

            {isLoggedIn ? (
              <NavLink to={"/signout"}>
                <li>logOut</li>
              </NavLink>
            ) : (
              <>
                <NavLink to={"/signup"}>
                  <li>sign Up</li>
                </NavLink>
                <NavLink to={"/signin"}>
                  <li>sign In</li>
                </NavLink>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
