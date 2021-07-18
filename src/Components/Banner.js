import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Banner.module.scss";
const team = require("Assets/Images/bg1.jpg");
const bg2 = require("Assets/Images/main-banner.jpg");
const bg3 = require("Assets/Images/slider-3.jpg");

const data = [
  {
    bg: bg2,
    title: [
      { text: "We comsume", isBig: false },
      { text: "Green", isBig: true },
      { text: "♻️", isBig: true },
    ],
  },
  {
    bg: bg3,
    title: [
      { text: "We love", isBig: false },
      { text: "Earth", isBig: true },
      { text: "🌏", isBig: true },
    ],
  },
  {
    bg: team,
    title: [
      { text: "We are", isBig: false },
      { text: "Xanh-Hub", isBig: true },
    ],
  },
];
export default function Banner() {
  const [cur, setCur] = React.useState(0);

  React.useEffect(() => {
    const a = setTimeout(
      () => {
        setCur((c) => (c + 1) % data.length);
      },
      cur === data.length - 1 ? 10000 : 7000
    );

    return () => {
      clearTimeout(a);
    };
  }, [cur]);
  return (
    <div className={styles.container}>
      <div style={{ overflow: "hidden" }}>
        <CarouselItem thisId={cur} now={data[cur]?.bg?.default} />
      </div>

      <div className={styles.text}>
        <div className={styles.wrapper}>
          {data[cur].title.map((e, i) => (
            <p
              className={`${styles.textItem} ${e.isBig ? styles.textBig : ""}`}
              key={e.text + i}
            >
              {e.text}
            </p>
          ))}
        </div>
        <div className={styles.nav}>
          <p
            tabIndex={1}
            onClick={() => {
              setCur((c) => (c - 1 + data.length) % data.length);
            }}
          >
            Prev
          </p>
          <div className={styles.indicatorWrapper}>
            {data.map((e, i) => (
              <div
                key={"indicator-" + i}
                className={`${styles.indicator} ${cur===i?styles.indiNow:''}`}
              ></div>
            ))}
          </div>
          <p
            tabIndex={1}
            onClick={() => {
              setCur((c) => (1 + c) % data.length);
            }}
          >
            next
          </p>
        </div>
      </div>
    </div>
  );
}

const CarouselItem = ({ now, thisId }) => {
  return (
    <div
      key={thisId}
      style={{ backgroundImage: `url(${now})` }}
      className={styles.item}
    ></div>
  );
};
