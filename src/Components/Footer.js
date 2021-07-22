import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Footer.module.scss";
import phone from "Assets/Images/Icon/phone.png";
import mail from "Assets/Images/Icon/mail.png";
import facebook from "Assets/Images/Icon/facebook.svg";
import twitter from "Assets/Images/Icon/twitter.svg";
import instagram from "Assets/Images/Icon/instagram.svg";
const socialContact = [
  { icon: facebook, title: "Facebook" },
  { icon: twitter, title: "Twitter" },
  { icon: instagram, title: "Instagram" },
];
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.team}>
          <h3>XANHHUB</h3>
          <div className={styles.member}>
            <p>Đào Xuân An</p>
            <p>Lê Trọng Khánh</p>
            <p>Hoàng Minh Tân</p>
            <p>Dương Minh Quang</p>
            <p>Đoàn Viết Thắng</p>
          </div>
        </div>
        <div className={styles.contact}>
          <h3>CONTACT INFO</h3>
          <p className={styles.address}>
            Address: 1st Dai Co Viet, Hai Ba Trung, Ha Noi
          </p>
          <div className={styles.phone}>
            <div className={styles.phoneIcon}>
              <img src={phone} alt="phone-icon" />
            </div>
            <p>0123456789</p>
          </div>
          <div className={styles.mail}>
            <div className={styles.mailIcon}>
              <img src={mail} alt="mail-icon" />
            </div>
            <p>xanhhub@gmail.com</p>
          </div>
        </div>
        <div className={styles.about}>
          <h3>ABOUT</h3>
          <ul>
            <li>
              <a href="">Our Story</a>
            </li>
            <li>
              <a href="">Benefits</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
          </ul>
        </div>
        <div className={styles.follow}>
          <h3>FOLLOW US</h3>
          {socialContact.map((e) => (
            <a href="">
              <div className={styles.icon}>
                <img src={e.icon} alt={e.title} />
              </div>
              <p className={styles.title}>{e.title}</p>
            </a>
          ))}
          {/* <div className={styles.subscribe}>
                <h3>Want more from XanhHub? Let's subscribe!</h3>
                <form>
                    <input type="email" placeholder="Email address" />
                    <button>{"\u003E"}</button>
                </form>
                </div> */}
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>Copyright {"\u00A9"} 2021 XanhHub. All Rights Reserved</p>
      </div>
    </footer>
  );
}
