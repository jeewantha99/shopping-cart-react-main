import React, { useState } from "react";
import './newsletter.css'

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
  
    const handleChange = (value) => {
      setEmail(value);
      setError(false);
    };
  
    const handleSubmit = () => {
      const isValidEmail = /^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(
        email
      );
  
      if (!isValidEmail) {
        setError(true);
      } else {
        console.log(email);
      }
    };
  
    return (
      <div className="Newsletter">
        <section>
          <h1>Stay informed on the latest happenings</h1>
          <p>For Exclusive Discounts & New Arrivals.</p>
  
          <div>
            <input
              className={error ? "error" : ""}
              type="text"
              placeholder="Your email"
              value={email}
              onChange={(e) => handleChange(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </section>
      </div>
    );
  };
  
  export default Newsletter;