import { useNavigate } from "react-router-dom";

export const BookSuccess = () => {
  const navigate = useNavigate();

  return (
    <>
      <section>
        <div className="book-Success">
          <div className="success-animation">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52">
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
          <div className="success-head">
            <h1>Ticket Book Successful.</h1>
          </div>
          <div className="success-para">
            <p>
              Thank you for booking, your booking has been placed successfully.
            </p>
          </div>
          <div className="success-btn">
            <div>
              <button
                onClick={() => navigate("/contact")}
                className="report-success-btn">
                Report{" "}
              </button>
            </div>
            <div>
              <button
                onClick={() => navigate("/")}
                className="home-success-btn">
                Go to Home{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
