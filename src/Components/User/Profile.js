import React from "react";
import { useState } from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Profile.module.scss";
export default function Profile() {
  const [Email, setEmail] = useState("nguyenvana@gmail.com");
  const [Name, setName] = useState("Nguyen Van A");
  const [Phone, setPhone] = useState("09669696969");
  const [Address, setAddress] = useState(
    "1st Dai Co Viet, Hai Ba Trung, Ha Noi, Viet Nam"
  );
  // test
  const [Password, setPassword] = useState("12345");
  const [Mutable, setMutable] = useState(true);
  return (
    <div className={styles.formContainer}>
      <h2>Personal info</h2>
      <form>
        <fieldset>
          <legend>Basic info</legend>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={Name}
            disabled={Mutable}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={Address}
            disabled={Mutable}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={Password}
            disabled={Mutable}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend>Contact info</legend>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={Email}
            disabled={Mutable}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={Phone}
            disabled={Mutable}
            onChange={(e) => setPhone(e.target.value)}
          />
        </fieldset>
      </form>
      <button
        onClick={(e) => {
          setMutable(!Mutable);
        }}
      >
        Edit
      </button>
    </div>
  );
}
