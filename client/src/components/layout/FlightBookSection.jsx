import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";

export const FlightBookSection = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    fromCity: "",
    toCity: "",
    date: "",
    returnDate: "",
    flightType: "",
  });
  console.log(searchData);

  const [error, setError] = useState({});

  const RoundTrip = searchData.flightType === "RoundTrip";

  const { searchFlightData } = useAuth();

  const validateForm = () => {
    let newErrors = {};

    if (!searchData.flightType.trim()) {
      newErrors.flightType = "flightType is required";
    }

    if (!searchData.fromCity.trim()) {
      newErrors.fromCity = "fromCity is required";
    }

    if (!searchData.toCity.trim()) {
      newErrors.toCity = "toCity is required";
    }
    if (!searchData.date.trim()) {
      newErrors.date = "date is required";
    }

    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    searchFlightData(searchData);
    console.log("inputDta", searchData);

    if (validateForm()) {
      navigate("/Ticket", { state: searchData });
    }
  };

  return (
    <>
      <section className="flight-section">
        <div>
          <form onSubmit={handleFormSubmit}>
            <div>
              <div className="flight-type">
                <div>
                  <p className="type-para"> Flight Type: </p>
                </div>
                <div
                  className="type-content"
                  name="flightType"
                  id="flightType"
                  defaultValue="oneWay"
                  value={searchData.flightType}
                  onChange={handleValue}>
                  <div className="types">
                    <span>One Way</span>
                    <input
                      type="radio"
                      name="flightType"
                      value="oneWay"
                      id="oneway"
                    />
                  </div>
                  <div className="types">
                    <span>Round Trip</span>
                    <input
                      type="radio"
                      name="flightType"
                      id="roundtrip"
                      value="RoundTrip"
                    />
                  </div>
                </div>
                {error.flightType && (
                  <p style={{ color: "red" }}>{error.flightType}</p>
                )}
              </div>
            </div>

            <div className="flight-content">
              <div className="fromCity Ticket-book">
                <div>
                  <span>From</span>
                </div>
                <div>
                  <input
                    id="fromCity"
                    name="fromCity"
                    type="text"
                    autoComplete="off"
                    placeholder="City, Airport, County"
                    value={searchData.fromCity}
                    onChange={handleValue}
                  />
                </div>
                {error.fromCity && (
                  <p style={{ color: "red" }}>{error.fromCity}</p>
                )}
              </div>

              <div className="ToCity Ticket-book">
                <div>
                  <span>To</span>
                </div>
                <div>
                  <input
                    type="text"
                    id="toCity"
                    name="toCity"
                    autoComplete="off"
                    placeholder="City, Airport, County"
                    value={searchData.toCity}
                    onChange={handleValue}
                  />
                </div>
                {error.toCity && <p style={{ color: "red" }}>{error.toCity}</p>}
              </div>

              <div className="depart flight-Date ">
                <div>
                  <span>Date</span>
                </div>
                <div>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={searchData.depart}
                    onChange={handleValue}
                  />
                </div>
                {error.date && <p style={{ color: "red" }}>{error.date}</p>}
              </div>

              {RoundTrip ? (
                <div className="depart flight-Date ">
                  <div>
                    <span>Return Date</span>
                  </div>
                  <div>
                    <input
                      type="date"
                      name="returnDate"
                      id="returnDate"
                      required
                      value={searchData.depart}
                      onChange={handleValue}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="flight-btn">
              <button>Search Flight</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
