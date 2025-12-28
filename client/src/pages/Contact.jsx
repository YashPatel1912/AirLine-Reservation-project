import { useState } from "react";
import { useAuth } from "../store/auth";

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact({ username: user.username, email: user.email, message: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="container contact-page">
        <div className="contact-head">
          <h1>Contact page</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="contact-details">
            <div>
              <label htmlFor="username">username : </label>
              <input
                type="text"
                name="username"
                id="username"
                required
                placeholder="username"
                autoComplete=" off"
                value={contact.username}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter your Email"
                autoComplete=" off"
                value={contact.email}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="message">Message : </label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={5}
                autoComplete=" off"
                value={contact.message}
                onChange={handleInput}></textarea>
            </div>
            <div>
              <button className="contact-btn">submit</button>
            </div>
          </div>
        </form>
      </div>
      {/* <div className="g-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58502.45206586783!2d72.34177913339167!3d23.589866567472804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c422caf789ef5%3A0x170bbc90b8be8bdc!2sMehsana%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1745325472564!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"></iframe>
      </div> */}
    </section>
  );
};
