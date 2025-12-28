import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

export const PassengerDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedFlight = location.state || {};


  const [passengerData, setPassengerData] = useState({
    fullName: "",
    gender: "",
    birthDate: "",
    phone: "",
    email: "",
  });

  const price = selectedFlight.price;
  const GST = `₹ ${"105"}`;
  const priceReplace = price ? price.replace("₹", "").replace(",", "") : "";
  const GSTReplace = GST ? GST.replace("₹", "") : "";
  const totalPrice = `₹ ${Number(priceReplace) + Number(GSTReplace)}`;

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setPassengerData({
      ...passengerData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(passengerData);

    navigate("/payment", { state: { passengerData, selectedFlight } });
  };

  return (
    <>
      <section className="AllInformation">
        <div className="main-head">
          <h1>Passenger information</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="information">
            <div className="passenger-details passenger-container">
              <div className="passenger-information">
                <div className="top">
                  <div className="fullName">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={passengerData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="bottom">
                  <div>
                    <label htmlFor="gender">Gender</label>
                    <select
                      name="gender"
                      id="gender"
                      required
                      value={passengerData.gender}
                      onChange={handleChange}>
                      <option value="">-- Select --</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="birthDate">date of birth</label>
                    <input
                      type="date"
                      id="birthDate"
                      name="birthDate"
                      required
                      value={passengerData.birthDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="price-information passenger-container">
                <div className="head-text">
                  <h1>Flight Total </h1>
                </div>
                <div className="Total-details">
                  <div className="details">
                    <p>
                      Base Fare : <span> {price}</span>
                    </p>
                    <p>
                      Tax : <span>{GST} </span>
                    </p>
                  </div>
                  <div className="details">
                    <p>
                      Total amount paid : <span>{totalPrice}</span>
                    </p>
                    <p>
                      Discount : <span>₹ 0</span>
                    </p>
                  </div>
                  <div>
                    <h2>
                      Total payable : <span>{totalPrice}</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-details passenger-container">
            <div className="head-text">
              <h1>Contact Info</h1>
            </div>
            <div className="contact-information">
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  required
                  value={passengerData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={passengerData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="passenger-btn">
            <button className="back-btn btn" onClick={() => navigate(-1)}>
              Back
            </button>

            <button className="payment-btn btn">
              Continue To Payment <FaArrowRightLong />
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
