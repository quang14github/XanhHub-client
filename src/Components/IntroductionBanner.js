import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/IntroductionBanner.module.scss";
export default function IntroductionBanner() {
  const [atView, setAtView] = React.useState(false);

  return (
    <div className={styles.container}>
      {atView ? (
        <Content />
      ) : (
        <PlaceHolder
          setView={() => {
            setAtView(true);
          }}
        />
      )}

      <div className={styles.overlay}></div>
    </div>
  );
}
const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <h2>Introduce</h2>
        <div className={styles.name}>
          <h1>Green Purchasing</h1>
          <h1>Flatform</h1>
        </div>
      </div>
      <div className={styles.paragraph}>
        <p>XANHHUB, đứa con tinh thần của những chàng sinh viên năm nhất và năm 2
        của Đại học Bách khoa Hà Nội.</p>
         <p>“XanhHUB được xây dựng với sứ mệnh thúc
        đẩy xu hướng tiêu dùng xanh ở Việt Nam. Chúng tôi đến với cuộc thi để
        đem về 20 triệu VND và đem lại cho cộng đồng 20 triệu USD cùng nhiều giá
        trị to lớn khác!”</p>
      </div>
    </div>
  );
};
const PlaceHolder = ({ setView }) => {
  const Ref = React.useRef(null);
  const [offset, setOffset] = React.useState(0);
  React.useEffect(() => {
    const handler = (e) => {
      if (Ref.current) {
        const { bottom, top } = Ref.current.getBoundingClientRect();

        setOffset(Math.max(150 - bottom / 5, 0));
        const h = window.innerHeight / 3;

        if (top < h) {
          setView();
        }
      }
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [Ref,setView]);
  return (
    <div className={styles.content}>
      <h2 style={{ top: offset }} ref={Ref} className={styles.PlaceHolder}>
        Scroll down
      </h2>
    </div>
  );
};
