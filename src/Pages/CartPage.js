import React from "react";
import { useState } from "react";
import Layout from "Components/Layout";
import Checkout from "Components/Checkout";
import Cart from "Components/Cart";
import loading from "Assets/Images/load.svg";
import { useSelector } from "react-redux";
import { useCreateCheckout } from "Hooks/authenHook";
import styles from "Assets/Stylesheets/SCSS/Pages/CartPage.module.scss";
import { useRemoveAfterCheckout } from "Hooks";
export default function CartPage() {
  const onRemoveAfterCheckout = useRemoveAfterCheckout();
  const [toCheckout, setToCheckout] = useState(false);
  const [lock, setLock] = React.useState(false);
  const [result, setResult] = React.useState({ status: false, mess: "wating" });
  const onCheckout = useCreateCheckout();
  const selected = useSelector((state) =>
    state.cart.cart.filter((e) => e.checkout)
  );
  const onSubmit = ({ order_infor }) => {
    if (order_infor.address.trim() === "") {
      setLock(false);
      return alert("empty address!");
    }
    onCheckout({ order_infor, cart: selected }).then((res) => {
      if (res.status === true) {
        onRemoveAfterCheckout(selected);
        setResult({ status: true, mess: "Success!" });
      } else {
        setResult({ status: true, mess: "Failed!" });
      }
    });
  };
  return (
    <Layout requiredLogin={true}>
      {lock && (
        <WatingScreen
          result={result}
          isComplete
          onExit={() => {
            setLock(false);
            setToCheckout(false);
            setResult({ status: false, mess: "waiting" });
          }}
        />
      )}
      <div>
        <Cart
          checkout={(state) => setToCheckout(state)}
          toCheckout={toCheckout}
        />
        {toCheckout && (
          <Checkout lock={lock} setLock={setLock} onSubmit={onSubmit} />
        )}
      </div>
    </Layout>
  );
}

const WatingScreen = ({ onExit, result }) => {
  const [showExit, setShow] = React.useState(false);
  React.useEffect(() => {
    const a = setTimeout(() => {
      setShow(true);
    }, 5000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  return (
    <div className={styles.waiting}>
      {result.status ? (
        <Complete result={result} onExit={onExit} />
      ) : (
        <OnWait onExit={onExit} canExit={showExit} />
      )}
    </div>
  );
};
const OnWait = ({ canExit, onExit }) => {
  return (
    <div className={styles.groupWait}>
      <img src={loading} width="100px" />
      {canExit && <button onClick={onExit}>Cancel</button>}
    </div>
  );
};
const Complete = ({ onExit, result }) => {
  return (
    <div className={styles.groupWait}>
      <p>{result?.mess}</p>

      <button onClick={onExit}>Exit</button>
    </div>
  );
};
