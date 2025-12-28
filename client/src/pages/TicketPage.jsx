import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FlightBookSection } from "../components/layout/FlightBookSection";
import { useAuth } from "../store/auth";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoAirplaneSharp } from "react-icons/io5";
import { PiAirplaneTakeoff, PiAirplaneLanding } from "react-icons/pi";
import { useEffect, useState } from "react";

export const TicketPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchData = location.state || {};

  const { filteredFlight, flightData } = useAuth();

  const [selectedFlight, setSelectedFlight] = useState({
    fromCity: "",
    toCity: "",
    duration: "",
    departureTime: "",
    arrivalTime: "",
    price: "",
    flightType: "",
    date: "",
    returnDate: "",
  });

  const [isUpdate, setIsUpdate] = useState(false);

  const handleNavigate = (curFlight, ticketAmount) => {
    setSelectedFlight({
      fromCity: curFlight.fromCity,
      toCity: curFlight.toCity,
      duration: curFlight.duration,
      departureTime: curFlight.departureTime,
      arrivalTime: curFlight.arrivalTime,
      price: ticketAmount,
      flightType: searchData.flightType,
      date: searchData.date,
      returnDate: searchData.returnDate,
    });

    setIsUpdate(true);
  };

  console.log(selectedFlight);
  useEffect(() => {
    if (isUpdate) {
      navigate("/passenger", { state: selectedFlight });
    }
  }, [isUpdate, selectedFlight, navigate]);

  return (
    <>
      <div>
        <div >
          <NavLink to={"/"}>
            <IoMdArrowRoundBack className="back-btn"/>
          </NavLink>
        </div>
        <div className="ticket-information">
          <FlightBookSection />
        </div>
        <ul>
          {filteredFlight.length > 0 ? (
            filteredFlight.map((curFlight, index) => {
              const departureTime = curFlight.departureTime.replace("IST", "");
              const arrivalTime = curFlight.arrivalTime.replace("IST", "");

              const amount = curFlight.price.replace("₹", "").replace(",", "");
              const total = `₹${amount * 2}`;

              const ticketAmount =
                flightData.flightType === "RoundTrip" ? total : curFlight.price;

              const { fromCity, toCity, airline, duration } = curFlight;

              return (
                <li key={index}>
                  <div className="ticketDetails ">
                    <div className="city-details">
                      <h2>
                        {fromCity} - {toCity}
                      </h2>
                    </div>

                    <div className="time-details">
                      <div className="departure timeParts">
                        <span>
                          <PiAirplaneTakeoff className="icons" />
                          Departure
                        </span>
                        <h2>{departureTime}</h2>
                      </div>

                      <div className="line"></div>

                      <div className="duration timeParts">
                        <span>{airline}</span>
                        <span>
                          <IoAirplaneSharp className="icons" />
                        </span>
                        <h2>{duration}</h2>
                      </div>

                      <div className="line"></div>

                      <div className="arrival timeParts">
                        <span>
                          <PiAirplaneLanding className="icons" /> Arrival
                        </span>
                        <h2>{arrivalTime}</h2>
                      </div>
                    </div>

                    <div>
                      <p className="ticket-amount">Price : {ticketAmount}</p>
                      <p>{flightData.flightType}</p>
                    </div>

                    <div className="ticket-button">
                      <button
                        onClick={() => handleNavigate(curFlight, ticketAmount)}>
                        {/* <NavLink
                          to="/passenger"
                          state={{ selectedFlightData: selectedFlight }}>
                          Book Flight
                        </NavLink> */}
                        click
                      </button>
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <p>No result Found...</p>
          )}
        </ul>
      </div>
    </>
  );
};
