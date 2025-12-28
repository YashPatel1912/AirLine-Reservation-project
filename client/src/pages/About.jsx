import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <>
      <section>
        <div className="hero container">
          <h1>Welcome to Sky Line Reservation System</h1>
          <p>
            Your journey begins with us – seamless, reliable, and secure
            bookings across the skies and beyond.
          </p>
          <NavLink to={"/ticket"} className="about-btn">
            Book Your Trip
          </NavLink>
        </div>

        <div className="section">
          <h2>Our Story</h2>
          <div className="two-col">
            <div>
              <p>
                Sky Line was born out of a desire to simplify travel. Whether
                you are planning a quick weekend getaway or a complex multi-city
                adventure, our platform was built to make booking easy,
                intuitive, and reliable. From flights to trains, buses to
                intercity rides — we bring all your travel needs into one
                intelligent reservation system. We started as a small team of
                passionate travel enthusiasts and developers who envisioned a
                smarter ecosystem where booking could be done in real-time, with
                full transparency, and zero stress.
              </p>
              <br />
              <p>
                Fast forward to today, and Sky Line Reservation System has grown
                into a trusted travel companion for millions of users worldwide,
                supporting bookings across 500+ cities and partnering with
                hundreds of transportation providers. But we’re more than just a
                booking engine — We are a travel tech company with a mission: to
                empower every traveler with smart tools, secure options, and
                helpful support, all in one beautifully designed platform.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Mission, Vision & Values</h2>
          <div className="grid">
            <div className="card">
              <h3>🌟 Mission</h3>
              <p>
                To make travel accessible and stress-free through innovative
                technology and customer-first service.
              </p>
            </div>
            <div className="card">
              <h3>🔭 Vision</h3>
              <p>
                To be the most trusted reservation platform for global and local
                travelers.
              </p>
            </div>
            <div className="card">
              <h3>💙 Core Values</h3>
              <ul>
                <li>Customer-Centricity</li>
                <li>Reliability</li>
                <li>Transparency</li>
                <li>Innovation</li>
                <li>Sustainability</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>What Makes Us Different?</h2>
          <div className="grid">
            <div className="card">
              <h3>💼 Multiple Travel Modes</h3>
              <p>Book flights, trains, and buses all in one place.</p>
            </div>
            <div className="card">
              <h3>⚡ Real-Time Availability</h3>
              <p>Up-to-the-minute seat inventory and pricing.</p>
            </div>
            <div className="card">
              <h3>🔒 Secure Payments</h3>
              <p>Industry-standard encryption and fraud protection.</p>
            </div>
            <div className="card">
              <h3>🛎️ 24/7 Support</h3>
              <p>Friendly, human help whenever you need it.</p>
            </div>
            <div className="card">
              <h3>📲 Mobile Friendly</h3>
              <p>Book anytime, anywhere from any device.</p>
            </div>
            <div className="card">
              <h3>🌍 Global Network</h3>
              <p>Thousands of routes, hundreds of providers.</p>
            </div>
          </div>
        </div>

        <div className="section" style={{ marginBottom: "3rem" }}>
          <h2>What Our Users Say</h2>
          <div className="grid">
            <div className="stat-box">
              <h3>2M+</h3>
              <p>Bookings Completed</p>
            </div>
            <div className="stat-box">
              <h3>500+</h3>
              <p>Cities Covered</p>
            </div>
            <div className="stat-box">
              <h3>98%</h3>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
