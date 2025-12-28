import "../App.css";
// import { CiLocationOn } from "react-icons/ci";
// import { FaUser } from "react-icons/fa";
// import { SlCalender } from "react-icons/sl";
// import { NavLink } from "react-router-dom";
import { FlightBookSection } from "../components/layout/FlightBookSection";

export const Home = () => {
  return (
    <section>
      <header>
        <div className="hero-section container">
          <div className="banner-content">
            <div className="text ">
              <p>AWAY FROM MONOTONOUS LIFE </p>
              <h1>MAGICAL TRAVEL</h1>
              <p>
                To move, to breathe, to fly, to float, To gain all while you
                give, To roam the roads of lands remote: To travel is to live:An
                inspiring travel quote.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="main-section container">
          <div className="flight-details">
            <FlightBookSection />
          </div>

          <div className="main-text">
            <h1>TRAVEL SUPPORT</h1>
            <h3> Plan Your travel with confidence</h3>
            <p>
              Find help with booking and travel plans. see what to expect along
              the journey!!{" "}
            </p>
          </div>
        </div>

        <div className="main-content-1 container">
          <div className="travel-info-1">
            <div className="travel-detail">
              <li>01</li>
              <h1>Travel requirements for Dubai</h1>
              <p>
                Find help with booking and travel plans. see what to expect
                along the journery to fovourite destinations!!
              </p>
            </div>
            <div className="travel-detail">
              <li>02</li>
              <h1>Chauffeur services at your arrival</h1>
              <p>
                Find help with booking and travel plans. see what to expect
                along the journery to fovourite destinations!!
              </p>
            </div>
            <div className="travel-detail">
              <li>03</li>
              <h1>Multi-Risk travel insurance</h1>
              <p>
                Find help with booking and travel plans. see what to expect
                along the journery to fovourite destinations!!
              </p>
            </div>
          </div>

          <div className="travel-img-1">
            <img src="../img/travel pic 1.png" alt="travel img" />
          </div>
        </div>

        <div className="main-content-2 container">
          <div className="travel-info-2">
            <div className="travel-info-title">
              <h1>Unaccompanied Minor Lounge</h1>
            </div>
            <div className="travel-info-details">
              <div>
                <h1> Help Through the airport</h1>
                <p>
                  You can also call airlines from your phone and book a flight
                  ticket to one of your favourite destinations
                </p>
              </div>
              <div>
                <h1> Priority Boarding</h1>
                <p>
                  You can also call airlines from your phone and book a flight
                  ticket to one of your favourite destinations
                </p>
              </div>
              <div>
                <h1> Care on the flight</h1>
                <p>
                  You can also call airlines from your phone and book a flight
                  ticket to one of your favourite destinations
                </p>
              </div>
              <div>
                <h1> Chauffeur-drive service</h1>
                <p>
                  You can also call airlines from your phone and book a flight
                  ticket to one of your favourite destinations
                </p>
              </div>
            </div>
          </div>
          <div className="travel-img-2">
            <img src="../img/travel pic 2.png" alt="travel img" />
          </div>
        </div>
      </main>
    </section>
  );
};
