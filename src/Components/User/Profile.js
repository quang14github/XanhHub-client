import React from "react";
import { useState } from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Profile.module.scss";
const defaultInfo = {
  name: "User Name",
  address: "1st Dai Co Viet, Hai Ba Trung, Ha Noi, Viet Nam",
  password: "123456789",
  email: "xanhhub@gmail.com",
  phone: "0123456789",
};
export default function Profile() {
  const [Name, setName] = useState("User Name");
  const [Address, setAddress] = useState(
    "1st Dai Co Viet, Hai Ba Trung, Ha Noi, Viet Nam"
  );
  const [Password, setPassword] = useState("123456789");
  const [Email, setEmail] = useState("xanhhub@gmail.com");
  const [Phone, setPhone] = useState("0123456789");
  const [Mutable, setMutable] = useState(true);
  const [Editing, setEditing] = useState(false);
  const [BtnTitle, setBtnTitle] = useState("Edit");
  function resetInfo(obj) {
    setName(obj.name);
    setAddress(obj.address);
    setPassword(obj.password);
    setEmail(obj.email);
    setPhone(obj.phone);
  }
  const basicInfoInputs = [
    { label: "Name", id: "name", type: "text", value: Name, cb: setName },
    {
      label: "Address",
      id: "address",
      type: "text",
      value: Address,
      cb: setAddress,
    },
    {
      label: "Password",
      id: "password",
      type: "password",
      value: Password,
      cb: setPassword,
    },
  ];
  const contactInfoInputs = [
    { label: "Email", id: "email", type: "email", value: Email, cb: setEmail },
    { label: "Phone", id: "phone", type: "tel", value: Phone, cb: setPhone },
  ];
  return (
    <div className={styles.formContainer}>
      <form>
        <fieldset className={styles.basicInfo}>
          <legend>Basic info</legend>
          {basicInfoInputs.map((input) => (
            <div className={styles.formGroup}>
              <label htmlFor={input.id}>{input.label}</label>
              <input
                key={input.id}
                type={input.type}
                id={input.id}
                value={input.value}
                disabled={Mutable}
                onChange={(e) => input.cb(e.target.value)}
              />
            </div>
          ))}
        </fieldset>
        <fieldset className={styles.contactInfo}>
          <legend>Contact info</legend>
          {contactInfoInputs.map((input) => (
            <div className={styles.formGroup}>
              <label htmlFor={input.id}>{input.label}</label>
              <input
                key={input.id}
                type={input.type}
                id={input.id}
                value={input.value}
                disabled={Mutable}
                onChange={(e) => input.cb(e.target.value)}
              />
            </div>
          ))}
        </fieldset>
      </form>
      <div className={styles.btnContainer}>
        <button
          className={Editing ? styles.cancelBtn : styles.none}
          onClick={(e) => {
            setMutable(!Mutable);
            setEditing(!Editing);
            setBtnTitle(Editing ? "EDIT" : "SAVE CHANGES");
            resetInfo(defaultInfo);
          }}
        >
          CANCEL
        </button>
        <button
          className={Editing ? styles.editBtnActive : styles.editBtn}
          onClick={(e) => {
            setMutable(!Mutable);
            setEditing(!Editing);
            setBtnTitle(Editing ? "EDIT" : "SAVE CHANGES");
          }}
        >
          {BtnTitle}
        </button>
      </div>
    </div>
  );
}
