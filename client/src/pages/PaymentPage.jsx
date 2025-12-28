import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { passengerData, selectedFlight } = location.state || {};

  console.log(selectedFlight);

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expireDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const price = selectedFlight.price;
  const GST = `₹ ${"105"}`;
  const priceReplace = price ? price.replace("₹", "").replace(",", "") : "";
  const GSTReplace = GST ? GST.replace("₹", "") : "";
  const totalPrice = `₹ ${Number(priceReplace) + Number(GSTReplace)}`;

  const handlePayment = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setPaymentData({
      ...paymentData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!paymentData.cardNumber.trim())
      newErrors.cardNumber = "Card number is required";
    else if (!/^\d{16}$/.test(paymentData.cardNumber))
      newErrors.cardNumber = "Card number must be 16 digits";

    if (!paymentData.expireDate)
      newErrors.expireDate = "ExpireDate is Required";
    else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(paymentData.expireDate))
      newErrors.expireDate = " Use MM/YY format";

    if (!paymentData.cvv.trim()) newErrors.cvv = "CVV is Required";
    else if (!/^\d{3}$/.test(paymentData.cvv))
      newErrors.cvv = "CVV must be 3 digits";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (validateForm()) {
        setLoading(true);
      }

      const booking = { passengerData, paymentData, selectedFlight };

      const response = await fetch("http://localhost:5000/api/passenger/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          passenger: booking.passengerData,
          flightData: booking.selectedFlight,
          payment: booking.paymentData,
        }),
      });

      if (response.ok) {
        console.log(response);
        navigate("/success");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section>
        <div className="book-details">
          <div className="book-info">
            <div>
              <h1>Book Information</h1>
            </div>
            <div className="book-information">
              <div>
                <p>Full Name</p>
                <span>{passengerData.fullName}</span>
              </div>
              <div>
                <p>Email</p>
                <span>{passengerData.email}</span>
              </div>
              <div>
                <p>Phone Number</p>
                <span>{passengerData.phone}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="payment-amount price-information ">
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

        <form onSubmit={handleSubmit}>
          <div className="payment-page">
            <div className="head-txt">
              <div>
                <h1>Payment Details</h1>
              </div>
              <div>
                <p>
                  Please fill out the form below. Enter your card account
                  Details.
                </p>
              </div>
            </div>
            <div className="payment-details">
              <div className="card-num">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="number"
                  placeholder="1234 5678 9012 3456"
                  name="cardNumber"
                  id="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handlePayment}
                />
                {errors.cardNumber && (
                  <p style={{ color: "red" }}>{errors.cardNumber}</p>
                )}
              </div>
              <div className="pay-information">
                <div>
                  <div className="expire-details">
                    <div>
                      <label htmlFor="expireDate">Expire Date</label>
                      <input
                        type="text"
                        name="expireDate"
                        id="expireDate"
                        placeholder="MM/YY"
                        value={paymentData.expireDate}
                        onChange={handlePayment}
                      />
                      {errors.expireDate && (
                        <p style={{ color: "red" }}>{errors.expireDate}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    id="cvv"
                    value={paymentData.cvv}
                    onChange={handlePayment}
                  />
                  {errors.cvv && <p style={{ color: "red" }}>{errors.cvv}</p>}
                </div>
              </div>
            </div>
          </div>

          <div className="payment-button">
            <div className="buttons">
              <div>
                <button className="btn-back btn " onClick={() => navigate(-1)}>
                  Back
                </button>
              </div>

              <div>
                <button className="payment-btn btn">
                  {loading ? "Processing..." : "Pay Now"}
                </button>
              </div>
            </div>
            <div className="payment-msg">
              {loading && <p>⏳ Processing your payment, please wait...</p> && (
                <p>Payment failed</p>
              )}
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
